import sinon from 'sinon';
import { Model } from 'mongoose';
import { expect } from 'chai';
import { Request, Response, NextFunction } from 'express';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import CarController from '../../../src/Controllers/CarController';

describe('Consulta de carros cadastrados', function () {
  it('É possível cadastrar um novo carro...', async function () {
    const inputCarMock: ICar = {
      buyValue: 15.99,
      color: 'Black',
      doorsQty: 4,
      model: 'Marea',
      seatsQty: 5,
      status: true,
      year: 2002,
    };

    const outPutCarMock: ICar = {
      id: '641db7295da6686c24a2840b',
      buyValue: 15.99,
      color: 'Black',
      doorsQty: 4,
      model: 'Marea',
      seatsQty: 5,
      status: true,
      year: 2002,
    };
    sinon.stub(Model, 'create').resolves(outPutCarMock);

    const service = new CarService();
    const result = await service.registerCar(inputCarMock);

    expect(result).to.be.deep.equal(outPutCarMock);
  });

  it('É possível consultar um carro pelo seu ID...', async function () {
    const carMock: ICar = {
      id: '641db7295da6686c24a2840b',
      buyValue: 15.99,
      color: 'Black',
      doorsQty: 4,
      model: 'Marea',
      seatsQty: 5,
      status: true,
      year: 2002,
    };
    sinon.stub(Model, 'findById').resolves(carMock);

    const service = new CarService();
    const result = await service.getCarById('641db7295da6686c24a2840b');

    expect(result).to.be.deep.equal(carMock);
  });

  it('É possível consultar a lista de todos os carro cadastrados...', async function () {
    const listCarMock: ICar[] = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Tempra',
        year: 1995,
        color: 'Black',
        status: false,
        buyValue: 39,
        doorsQty: 2,
        seatsQty: 5,
      },
    ];
    sinon.stub(Model, 'find').resolves(listCarMock);

    const service = new CarService();
    const result = await service.getAllCars();

    expect(result).to.be.deep.equal(listCarMock);
  });

  it('Retorna mensagem informando ID inválido...', async function () {
    const req = { body: {}, params: {} } as Request;
    const res = { status: {}, json: {} } as Response;
    const next: NextFunction = () => {};
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(null);
    const carController = new CarController(req, res, next);

    try {
      await carController.getCarById();
    } catch (e) {
      expect((e as Error).message).to.be.equal('Invalid mongo id');
    }
  });

  // it('Retorna mensagem caso não seja encontrado o carro com ID informado...', async function () {
  //
  // });
});