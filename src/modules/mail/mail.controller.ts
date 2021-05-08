import { Controller, Param, Post, UseGuards } from '@nestjs/common';
import { ApiHeader, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { XApiKeyGuard } from '../auth/x-api-key-guard';
import { MailService } from './mail.service';

@ApiHeader({
  name: 'x-api-key',
  description: 'Custom header',
})
@Controller('api/mail')
@ApiTags('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('/send-emails/:newsLetterId')
  @UseGuards(XApiKeyGuard)
  @ApiResponse({ status: 200, description: 'Successful Response' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiOperation({
    description: 'send mail Subscription for a newsletter',
  })
  async sendNewsLetter(
    @Param('newsLetterId') newsLetterId: string,
  ): Promise<any> {
    return await this.mailService.sendNewsLetter(newsLetterId);
  }
}
