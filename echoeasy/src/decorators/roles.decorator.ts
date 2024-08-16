import { SetMetadata } from '@nestjs/common';

export enum RolesEnum {
  ADMIN = 'admin',
  USER = 'user',
  STUDENT = 'student',
}

export const ROLES_KEY = 'roles';
export const Roles = (...roles: RolesEnum[]) => SetMetadata(ROLES_KEY, roles);
