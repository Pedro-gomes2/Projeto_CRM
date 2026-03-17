import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { NivelExperiencia } from "../enums/nivel-experiencia.enum";
import { ModalidadeTrabalho } from "../enums/modalidade.enum";
import { TipoContrato } from "../enums/contrato.enum";
import { Candidata } from "../../candidata/entities/candidata.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";


@Entity({name: "tb_oportunidades"})

export class Oportunidade{

  //Criação do ID
  @PrimaryGeneratedColumn()
  id: number;

  //Criação de Titulo
  @Column({ length: 120 })
  titulo: string;

  //Criação da Empresa
  @Column({ length: 120 })
  empresa: string;

  //Criação de Área
  @Column({ length: 100 })
  area: string;

  //Criação de Descrição
  @Column({ type: 'text' })
  descricao: string;

  //Modalidade de trabalho
  @Column({ type: 'enum',
    enum : TipoContrato
   })
  tipoContrato: TipoContrato; 
  // CLT | PJ | Freelancer | Estágio

  @Column({
  type: 'enum',
  enum: ModalidadeTrabalho
  })
  modalidade: ModalidadeTrabalho;
  // Presencial | Híbrido | Remoto

  //Salário
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  salario: number;

  //Localização
  @Column({ length: 100 })
  localizacao: string;


  //Nivel de EXPERIENCIA
  @Column({
  type: 'enum',
  enum: NivelExperiencia
  })
  nivelExperiencia: NivelExperiencia;
  // Junior | Pleno | Senior

  @Column({ type: 'text', nullable: true })
  beneficios: string;

  @Column({ default: true })
  ativa: boolean;

  @CreateDateColumn()
  dataCriacao: Date;

  @UpdateDateColumn()
  dataAtualizacao: Date;


  //Relacionamento com Candidata
  @ManyToOne(()=> Candidata, (candidata)=> candidata.oportunidade,{
    onDelete: "CASCADE"
  })
  candidata: Candidata;

  //Relacionamento Usuário

  @ManyToOne(() => Usuario, (usuario) => usuario.oportunidade,{
    onDelete: "CASCADE"
  } )
  usuario: Usuario;

}

