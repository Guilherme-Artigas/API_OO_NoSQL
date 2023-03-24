import { Model, model, models, Schema } from 'mongoose';

export default abstract class AbstractODM<G> {
  protected model: Model<G>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  async getAllCars(): Promise<G[]> {
    return this.model.find();
  }

  async getCarById(id: string): Promise<G | null> {
    return this.model.findById(id);
  }

  async registerCar(payload: G): Promise<G> {
    return this.model.create({ ...payload });
  }
}
