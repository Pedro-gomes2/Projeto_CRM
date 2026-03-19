import { IsEnum, IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';
import { NivelExperiencia } from '../enums/nivel-experiencia.enum';
import { ModalidadeTrabalho } from '../enums/modalidade.enum';
import { TipoContrato } from '../enums/contrato.enum';
import { Status } from '../enums/status.enun';

export class CreateOportunidadeDto {

  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNotEmpty()
  @IsString()
  empresa: string;

  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsEnum(TipoContrato)
  tipoContrato: TipoContrato;

  @IsEnum(NivelExperiencia)
  nivelExperiencia: NivelExperiencia;

  @IsEnum(Status)
  status: Status;

  @IsEnum(ModalidadeTrabalho)
  modalidade: ModalidadeTrabalho;

  @IsOptional()
  @IsNumber()
  salario?: number;

  @IsNotEmpty()
  @IsString()
  localizacao: string;
}