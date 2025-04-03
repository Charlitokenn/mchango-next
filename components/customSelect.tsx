import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import {FormControl, FormItem,FormLabel,FormMessage} from "@/components/ui/form"
  import { Controller } from "react-hook-form"
import Image from "next/image";
  
  interface FormFieldProps<T extends FieldValues> {
      control: Control<T>;
      name: Path<T>;
      label: string;
      placeholder: string;
      classname?: string;
      options?: any;
  }
   
  const CustomSelect = ({control, name, label, placeholder, classname, options}: FormFieldProps<T>) => (
      <Controller name={name} control={control} render={({ field }) => (
            <FormItem>
              <FormLabel className="label">{label}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className={classname}>
                  <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                {options?.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                        {option.icon && <Image src={option.icon} alt="flag" width={24} height={24}/>}
                        {option.label && option.label}
                        {option.icon && <span style={{ fontSize: 12 }}>{option.value}</span>}                  
                    </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
    )
  
  export default CustomSelect