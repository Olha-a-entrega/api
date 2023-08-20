import { ICreateCompanyDTO } from "../dtos/ICreateCompanyDTO";
import { Company } from "../infra/typeorm/entities/Company";
import { injectable, inject } from "tsyringe";
import { ICompaniesRepository } from "../repositories/ICompaniesRepository";

@injectable()
export class CreateCompanyService {
  constructor(
    @inject("CompaniesRepository")
    private companiesRepository: ICompaniesRepository
  ) {}

  async execute(data: ICreateCompanyDTO): Promise<Company> {
    const company = this.companiesRepository.create(data);

    return company;
  }
}
