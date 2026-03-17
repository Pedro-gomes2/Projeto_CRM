import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Candidata } from "./entities/candidata.entity";
import { CandidataController } from "./controllers/candidata.controller";
import { CandidataService } from "./services/candidata.service";

@Module({
    imports: [TypeOrmModule.forFeature([Candidata]),],
    controllers: [CandidataController],
    providers: [CandidataService],
    exports: [CandidataService],
})

export class CandidataModule{}