import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import {FormControl, FormItem,FormLabel,FormMessage} from "@/components/ui/form"
  import { Controller } from "react-hook-form"
  
  interface FormFieldProps<T extends FieldValues> {
      control: Control<T>;
      name: Path<T>;
      label: string;
      placeholder: string;
      classname?: string;
  }
   
  const CustomSelect = ({control, name, label, placeholder, classname}: FormFieldProps<T>) => (
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
                  <SelectItem value="+255">+255 Tanzania</SelectItem>
                  <SelectItem value="+254">+254 Kenya </SelectItem>
                  <SelectItem value="+256">+256 Uganda</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
    )
  
  export default CustomSelect