import sinon from 'sinon';
import { Model } from 'mongoose';
import { expect } from 'chai';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorCycleService from '../../../src/Services/MotorCycleService';

describe('Testes relacionados a Motocicletas:', function () {
  it('É possível cadastrar uma nova motocicleta...', async function () {
    const inputMotoMock: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };

    const outMotoMock: IMotorcycle = {
      id: '6348513f34c397abcad040b2',
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    sinon.stub(Model, 'create').resolves(outMotoMock);

    const service = new MotorCycleService();
    const result = await service.create(inputMotoMock);

    expect(result).to.be.deep.equal(outMotoMock);
  });

  it('É possível consultar uma motocicleta pelo ID...', async function () {
    const motoMock: IMotorcycle = {
      id: '1348513f34c397abcad040b2',
      model: 'Honda Cb 600f',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    sinon.stub(Model, 'findById').resolves(motoMock);

    const service = new MotorCycleService();
    const result = await service.findById('1348513f34c397abcad040b2');

    expect(result).to.be.deep.equal(motoMock);
  });

  it('É possível consultar todas as motocicletas...', async function () {
    const listMotoMock: IMotorcycle[] = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Honda Cb 500f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
      {
        id: '634852326b35b59438fbea31',
        model: 'Honda Cbr 1000rr',
        year: 2011,
        color: 'Orange',
        status: true,
        buyValue: 59.900,
        category: 'Street',
        engineCapacity: 1000,
      },
    ];
    sinon.stub(Model, 'find').resolves(listMotoMock);

    const service = new MotorCycleService();
    const result = await service.find();

    expect(result).to.be.deep.equal(listMotoMock);
  });
});
