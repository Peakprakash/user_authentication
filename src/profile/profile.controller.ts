import { Controller } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { Post } from '@nestjs/common/decorators';

@Controller('profile')
export class ProfileController {
  constructor(private pfpservice: ProfileService) {}

  @Post()
  createprofile() {
    return this.pfpservice.createProfile();
  }
}
