import { hotelTypes } from "@/lib/hotel-option-config"
import { useFormContext } from "react-hook-form"
import { HotelFormData } from "./ManageHotelForms"

const TypesFormSection = () => {
  const{register, watch,formState:{errors}} = useFormContext<HotelFormData>()
  const typeWatch = watch("type")
  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Type</h2>
      <div className="grid grid-cols-5 gap-2">
        {hotelTypes.map((type) => (
          <label key={type} className={typeWatch === type ? "cursor-pointer bg-blue-400 text-sm rounded-full px-4 py-2 font-semibold flex items-center justify-center" : "cursor-pointer bg-gray-300 text-sm rounded-full px-4 py-2 font-semibold flex items-center justify-center"}> 
            <input type="radio" value={type}  {...register('type')} className="hidden"/>
            <span>{type}</span>
          </label>
        ))}
      </div>
      <p className='text-red-400'>{errors.type?.message}</p>
    </div>
  )
}

export default TypesFormSection