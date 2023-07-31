import { Text } from "@/components/Text";
import { ConfirmForm, FormActions, FormHeader } from "./styles";
import { CalendarBlank, Clock } from "@phosphor-icons/react";
import { Button, Input, TextArea } from "@rbeiro-ui/react-components";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const confirmFormSchema = z.object({
  name: z.string().min(3, { message: "O nome precisa no mínimo 3 caracteres" }),
  email: z.string().email({ message: "Digite um e-mail válido" }),
  observations: z.string().nullable(),
});

type ConfirmFormData = z.infer<typeof confirmFormSchema>;

const ConfirmStep = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<ConfirmFormData>({
    resolver: zodResolver(confirmFormSchema),
  });
  function handleConfirmScheduling(data: ConfirmFormData) {
    console.log(data);
  }
  return (
    <ConfirmForm asChild>
      <form onSubmit={() => handleSubmit(handleConfirmScheduling)}>
        <FormHeader>
          <Text>
            <CalendarBlank />
            22 de Setembro de 2022
          </Text>
          <Text>
            <Clock />
            18:00h
          </Text>
        </FormHeader>

        <Input
          labelName="Nome completo"
          labelBackgroundColor="var(--colors-gray-800)"
          {...register("name")}
          errorMessage={errors.name?.message}
        />

        <Input
          labelName="Endereço de e-mail"
          labelBackgroundColor="var(--colors-gray-800)"
          {...register("email")}
          errorMessage={errors.email?.message}
        />

        <TextArea
          labelName="Observações"
          labelBackgroundColor="var(--colors-gray-800)"
          {...register("observations")}
        />

        <FormActions>
          <Button
            type="button"
            variant="transparent-background"
            bgColor="transparent"
          >
            Cancelar
          </Button>
          <Button type="submit" isLoading={isSubmitting} bgColor="#023E8A">
            Confirmar
          </Button>
        </FormActions>
      </form>
    </ConfirmForm>
  );
};

export { ConfirmStep };
