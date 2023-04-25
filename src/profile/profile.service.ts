import { Injectable } from '@nestjs/common';
import { profile } from 'console';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}
  async createProfile() {
    const profile = await this.prisma.profile.create({
      data: {
        dob: '1993/12/01',
        add: 'Batulachour',
        phno: '9817173456',
        loc: 'Pokhara',
      },
    });
    console.log(profile);
    return profile;
  }
}
