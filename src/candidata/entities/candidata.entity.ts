import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { NivelExperiencia } from "../enum/nivel-expeciencia.enum";
import { Disponibilidade } from "../enum/disponibilidade.enum";
import { Oportunidade } from "../../oportunidade/entities/oportunidade.entity";


@Entity({name:"tb_candidata"})

export class Candidata{

  @PrimaryGeneratedColumn()
  id: number;

  //Nome
  @Column({ length: 120 })
  nome: string;

  //Email
  @Column({ length: 120, unique: true })
  email: string;

  // Telefone
  @Column({ length: 20 })
  telefone: string;
  

  //Data de nascimento
  @Column({ type: "date" })
  data_nascimento: Date;
  
  //Localização
  @Column({ length: 100 })
  localizacao: string;
  

  //Area profissional
  @Column({ length: 100 })
  area_profissional: string;

  //Linkedin
  @Column({ length: 200, nullable: true })
  linkedin: string;
  

  //Portifólio
  @Column({ length: 200, nullable: true })
  portfolio: string;
  

  //Nivel de Experiencia
  @Column({
    type: "enum",
    enum: NivelExperiencia
  })
  nivel_experiencia: NivelExperiencia;


  // Pretensão Salarial
  @Column({ type: "decimal", precision: 10, scale: 2, nullable: true })
  pretensao_salarial: number;


  //Disponibilidade
  @Column({
    type: "enum",
    enum: Disponibilidade
  })
  disponibilidade: Disponibilidade;


  //Data de Criação
  @CreateDateColumn()
  data_cadastro: Date;

  
  //Relacionamento com Oportunidade
  @OneToMany(() => Oportunidade,(oportunidade) => oportunidade.candidata)
  oportunidade: Oportunidade[];


}