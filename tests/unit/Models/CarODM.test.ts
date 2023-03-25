import sinon from 'sinon';
import { Model } from 'mongoose';
import { expect } from 'chai';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

describe('Testes relacionados a Carros:', function () {
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
    const result = await service.create(inputCarMock);

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
    const result = await service.findById('641db7295da6686c24a2840b');

    expect(result).to.be.deep.equal(carMock);
  });

  it('Retorna mensagem informando quando não encontra ID...', async function () {
    sinon.stub(Model, 'findById').resolves(null);

    const service = new CarService();
    const result = await service.findById('');

    expect(result).to.be.equal(null);
  });

  it('É possível atualizar um carro passando ID correto...', async function () {
    const idMock = '634852326b35b59438fbea2f';
    const outPutCarMock: ICar = {
      id: '634852326b35b59438fbea2f',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.99,
      doorsQty: 4,
      seatsQty: 5,
    };

    sinon.stub(Model, 'updateOne').resolves();
    sinon.stub(Model, 'findById').resolves(outPutCarMock);

    const service = new CarService();
    const result = await service.updateOne(idMock, outPutCarMock);

    expect(result).to.be.deep.equal(outPutCarMock);
  });

  it('É possível consultar a lista de todos os carros cadastrados...', async function () {
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
    const result = await service.find();

    expect(result).to.be.deep.equal(listCarMock);
  });

  afterEach(function () { sinon.restore(); });
});
