import { Module } from '@nestjs/common'
import { TimeBlockController } from './time-block.controller'
import { PrismaService } from 'src/prisma.service'
import { TimeBlockService } from './time-block.service'

@Module({
	controllers: [TimeBlockController],
	providers: [TimeBlockService, PrismaService],
	exports: [TimeBlockService]
})
export class TimeBlockModule {}
