import { Repository } from "typeorm";
import { Company } from "../entities/Company";
import { AppDataSource } from "../../../../../data-source";
import { ICreateCompanyDTO } from "../../../dtos/ICreateCompanyDTO";
import { ICompaniesRepository } from "../../../repositories/ICompaniesRepository";

export class CompanyRepository implements ICompaniesRepository {
  private ormRepository: Repository<Company>;

  constructor() {
    this.ormRepository = AppDataSource.getRepository(Company);
  }

  async create(data: ICreateCompanyDTO) {
    const company = this.ormRepository.create(data);

    await this.ormRepository.save(company);

    return company;
  }
}
