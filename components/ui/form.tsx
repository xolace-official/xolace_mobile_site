import * as React from "react"
import {
  Controller,
  FormProvider,
  useFormContext,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"
import { cn } from "@/lib/utils"

const Form = FormProvider

function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: ControllerProps<TFieldValues, TName>) {
  return <Controller {...props} />
}

function FormItem({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("space-y-2", className)} {...props} />
}

function FormLabel({ className, ...props }: React.ComponentProps<"label">) {
  return <label className={cn("text-sm font-medium", className)} {...props} />
}

function FormControl({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

function FormMessage({ name }: { name: string }) {
  const {
    formState: { errors },
  } = useFormContext()
  const error = errors[name] as { message?: string } | undefined

  if (!error?.message) return null

  return <p className="text-xs text-destructive">{error.message}</p>
}

export { Form, FormControl, FormField, FormItem, FormLabel, FormMessage }
