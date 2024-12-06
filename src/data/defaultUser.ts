import { TUser } from "../types/TUser";

export const defaultUser: TUser = {
  _id: 0,
  isRemoteWork: false,
  user_avatar: '',
  first_name: '',
  last_name: '',
  first_native_name: '',
  last_native_name: '',
  middle_native_name: '',
  department: '',
  building: '',
  room: '',
  date_birth: {
    day: 0,
    year: 0,
    month: 0

  },
  desk_number: 0,
  manager: {
    last_name: '',
    first_name: '',
    id: 0
  },
  phone: '',
  email: '',
  skype: '',
  cnumber: '',
  citizenship: '',
  visa: []
}