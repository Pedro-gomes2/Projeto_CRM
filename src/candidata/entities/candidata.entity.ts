import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { NivelExperiencia } from "../enum/nivel-expeciencia.enum";
import { Disponibilidade } from "../enum/disponibilidade.enum";
import { Oportunidade } from "../../oportunidade/entities/oportunidade.entity";
import { ApiProperty } from "@nestjs/swagger";


@Entity({name:"tb_candidata"})

export class Candidata{

  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  //Nome
  @Column({ length: 120 })
  @ApiProperty()
  nome: string;

  //Email
  @Column({ length: 120, unique: true })
  @ApiProperty()
  email: string;

  // Telefone
  @Column({ length: 20 })
  @ApiProperty()
  telefone: string;
  

  //Data de nascimento
  @Column({ type: "date" })
  @ApiProperty()
  data_nascimento: Date;
  
  //Localização
  @Column({ length: 100 })
  @ApiProperty()
  localizacao: string;
  

  //Area profissional
  @Column({ length: 100 })
  @ApiProperty()
  area_profissional: string;

  //Linkedin
  @Column({ length: 200, nullable: true })
  @ApiProperty()
  linkedin: string;
  

  //Portifólio
  @Column({ length: 200, nullable: true })
  @ApiProperty()
  portfolio: string;
  

  //Nivel de Experiencia
  @Column({
  type: 'varchar'
  })
  @ApiProperty()
  nivel_experiencia: string;


  // Pretensão Salarial
  @Column({ type: "decimal", precision: 10, scale: 2, nullable: true })
  @ApiProperty()
  pretensao_salarial: number;


  //Disponibilidade
  @Column({
  type: 'varchar'
  })
  @ApiProperty()
  disponibilidade: Disponibilidade;


  //Data de Criação
  @CreateDateColumn()
  @ApiProperty()
  data_cadastro: Date;

  
  //Relacionamento com Oportunidade
  @ApiProperty()  
  @OneToMany(() => Oportunidade,(oportunidade) => oportunidade.candidata)
  oportunidade: Oportunidade[];


}