import { ICreateCompanyDTO } from "../dtos/ICreateCompanyDTO";
import { Company } from "../infra/typeorm/entities/Company";

export interface ICompaniesRepository {
  create(data: ICreateCompanyDTO): Promise<Company>;
}
