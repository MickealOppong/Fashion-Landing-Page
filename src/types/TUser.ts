
type TVisa = {

  issuing_country: string,
  type: string
  start_date: string
  end_date: string


}

type TManager = {
  id: number
  first_name: string,
  last_name: string

}

type TDatOfBirth = {
  year: number,
  month: number,
  day: number
}
export type TUser = {
  _id: number,
  isRemoteWork: boolean,
  user_avatar: string
  first_name: string
  last_name: string
  first_native_name: string
  last_native_name: string
  middle_native_name: string
  department: string
  building: string
  room: string
  date_birth: TDatOfBirth
  desk_number: number,
  manager: TManager
  phone: string
  email: string
  skype: string
  cnumber: string
  citizenship: string
  visa: TVisa[]
}