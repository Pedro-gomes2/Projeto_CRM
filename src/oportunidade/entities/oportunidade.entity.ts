import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { NivelExperiencia } from "../enums/nivel-experiencia.enum";
import { ModalidadeTrabalho } from "../enums/modalidade.enum";
import { TipoContrato } from "../enums/contrato.enum";
import { Candidata } from "../../candidata/entities/candidata.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { Status } from "../enums/status.enun";
import { ApiProperty } from "@nestjs/swagger";


@Entity({name: "tb_oportunidades"})

export class Oportunidade{

  //Criação do ID
  @PrimaryGeneratedColumn()
  @ApiProperty() 
  id: number;

  //Criação de Titulo
  @Column({ length: 120 })
  @ApiProperty() 
  titulo: string;

  //Criação da Empresa
  @Column({ length: 120 })
  @ApiProperty() 
  empresa: string;

  //Criação de Área
  @Column({ length: 100 })
  @ApiProperty() 
  area: string;

  //Criação de Descrição
  @Column({ type: 'text' })
  @ApiProperty() 
  descricao: string;

  //Modalidade de trabalho
  @Column({ type: 'enum',
    enum : TipoContrato
   })
  @ApiProperty() 
  tipoContrato: TipoContrato; 
  // CLT | PJ | Freelancer | Estágio

  @Column({
  type: 'enum',
  enum: ModalidadeTrabalho
  })
  @ApiProperty() 
  modalidade: ModalidadeTrabalho;
  // Presencial | Híbrido | Remoto

  //Salário
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  @ApiProperty() 
  salario: number;

  //Localização
  @Column({ length: 100 })
  @ApiProperty() 
  localizacao: string;


  //Nivel de EXPERIENCIA
  @Column({
  type: 'enum',
  enum: NivelExperiencia
  })
  @ApiProperty() 
  nivelExperiencia: NivelExperiencia;
  // Junior | Pleno | Senior


  //STATUS
  //Nivel de EXPERIENCIA
  @Column({
  type: 'enum',
  enum: Status
  })
  @ApiProperty() 
  status: Status;
  // ABERTA | FECHADA | PERDIDA


  @Column({ type: 'text', nullable: true })
  @ApiProperty() 
  beneficios: string;

  @Column({ default: true })
  @ApiProperty() 
  ativa: boolean;

  @CreateDateColumn()
  @ApiProperty() 
  dataCriacao: Date;

  @UpdateDateColumn()
  @ApiProperty() 
  dataAtualizacao: Date;


  //Relacionamento com Candidata

  @ApiProperty() 
  @ManyToOne(()=> Candidata, (candidata)=> candidata.oportunidade,{
    onDelete: "CASCADE"
  })
  candidata: Candidata;

  //Relacionamento Usuário
  @ApiProperty() 
  @ManyToOne(() => Usuario, (usuario) => usuario.oportunidade,{
    onDelete: "CASCADE",
    nullable: true
  } )
  usuario: Usuario;


}

