import { z } from 'zod'
import { useFieldArray, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { showSubmittedData } from '@/lib/show-submitted-data'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const profileFormSchema = z.object({
  username: z
    .string('Harap masukkan nama Anda.')
    .min(2, 'Nama minimal 2 karakter.')
    .max(50, 'Nama tidak boleh lebih dari 50 karakter.'),
  email: z.string().email({
    message: 'Harap masukkan alamat email yang valid.',
  }),
  bio: z.string().max(250).min(4),
  urls: z
    .array(
      z.object({
        value: z.url('Harap masukkan URL yang valid.'),
      })
    )
    .optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  username: 'Pak/Bu RT',
  email: 'rt@laporpakrt.id',
  bio: 'Kami siap melayani kebutuhan warga.',
  urls: [
    { value: 'https://laporpakrt.id' },
    { value: 'https://instagram.com/laporpakrt' },
  ],
}

export function ProfileForm() {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: 'onChange',
  })

  const { fields, append } = useFieldArray({
    name: 'urls',
    control: form.control,
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => showSubmittedData(data))}
        className='space-y-8'
      >
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Pengurus</FormLabel>
              <FormControl>
                <Input placeholder='Pak/Bu RT' {...field} />
              </FormControl>
              <FormDescription>
                Ini adalah nama yang akan ditampilkan kepada warga.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Layanan</FormLabel>
              <FormControl>
                <Input placeholder='rt@laporpakrt.id' {...field} />
              </FormControl>
              <FormDescription>
                Alamat email resmi untuk dihubungi warga.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='bio'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Deskripsi RT</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Ceritakan sedikit tentang lingkungan RT/RW Anda'
                  className='resize-none'
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Deskripsi singkat untuk warga.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`urls.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && 'sr-only')}>
                    Tautan Penting
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && 'sr-only')}>
                    Tambahkan tautan ke info penting, website resmi, atau sosial media.
                  </FormDescription>
                  <FormControl className={cn(index !== 0 && 'mt-1.5')}>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type='button'
            variant='outline'
            size='sm'
            className='mt-2'
            onClick={() => append({ value: '' })}
          >
            Tambah Tautan
          </Button>
        </div>
        <Button type='submit'>Simpan Perubahan</Button>
      </form>
    </Form>
  )
}
