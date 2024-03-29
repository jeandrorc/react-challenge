import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../input/Input';
import { Button } from '../button/Button';
import { z } from 'zod';
import { normalizeName } from '../../utils/normalizers';
import { submitForm } from 'features/formSlice';
import { fetchElementBySymbolThunk } from 'features/elementsSlice';
import { useAppDispatch } from 'app/hooks/useAppDispatch';

export const userSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' })
});

export type UserFormData = z.infer<typeof userSchema>;

const Form = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema)
  });
  const onSubmit = (data: UserFormData) => {
    dispatch(submitForm(data));
    dispatch(
      fetchElementBySymbolThunk({
        firstName: data.firstName,
        lastName: data.lastName
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row gap-10">
        <div className="flex-1">
          <Input
            register={register}
            name="firstName"
            label="First Name"
            placeholder="Breaking"
            normalizeInput={normalizeName}
            errors={errors}
          />
        </div>
        <div className="flex-1">
          <Input
            register={register}
            name="lastName"
            label="Last Name"
            normalizeInput={normalizeName}
            placeholder="Bad"
            errors={errors}
          />
        </div>
      </div>
      <div className="mt-5">
        <Button type="submit" variant="primary" className="w-full">
          Breakify
        </Button>
      </div>
    </form>
  );
};

export default Form;
