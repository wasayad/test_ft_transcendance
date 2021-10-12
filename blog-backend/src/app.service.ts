import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  private firstNames: string[] = []

  getAll() {
    return this.firstNames;
  }

  addFirstName(firstName: string) {
    this.firstNames.push(firstName);
    return firstName;
  }
}
