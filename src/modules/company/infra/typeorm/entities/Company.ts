import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "companies" })
export class Company {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  cnpj: string;

  @Column()
  phone: string;

  @Column()
  zipcode: string;

  @Column()
  address: string;

  @Column()
  district: string;

  @Column()
  addressNumber: string;

  @Column()
  complement: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @CreateDateColumn({
    name: "createdAt",
  })
  created_at: Date;

  @UpdateDateColumn({
    name: "updatedAt",
  })
  updated_at: Date;
}
