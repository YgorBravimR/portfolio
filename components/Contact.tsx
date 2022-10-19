import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '../@types/typings';

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

type Props = {
  pageInfo: PageInfo
}

export function Contact({ pageInfo }: Props) {
  const { register, handleSubmit, watch } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => (
    window.location.href = `mailto:ygorbravimr@gmail?subject=${formData.subject}&body=  Hey, my name is ${formData.name}. ${formData.message} (${formData.email})`
  );
  const filledInputs = watch("name") && watch("email") && watch("subject") && watch("message")
  const isSubmitDisabled = !filledInputs

  return (
    <div className="h-screen relative flex flex-col px-10 justify-center gap-5 sm:gap-10 items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-textSecondary text-2xl ml-2">
        Contact
      </h3>
      <div className='gap-12 sm:flex sm:flex-col lg:flex-row lg:pt-16'>
        <div className='flex flex-col items-center mb-8 sm:mb-auto'>
          <div className="flex flex-col space-y-5 sm:space-y-10 mt-16 sm:mt-0">
            <h4 className="hidden sm:block text-2xl md:text-3xl font-semibold text-center">
              I have got just what you need.{" "}
              <span className="decoration-detailPrimary50 underline">Let's Talk</span>
            </h4>
            <div className='space-y-2 flex flex-col items-start sm:ml-24'>
              <div className='flex items-center space-x-5 justify-start sm:justify-center'>
                <PhoneIcon className='text-detailPrimary h-5 sm:h-7 animate-pulse' />
                <p className='text-lg sm:text-2xl'>{pageInfo?.phoneNumber}</p>
              </div>
              <div className='flex items-center space-x-5 justify-start sm:justify-center'>
                <EnvelopeIcon className='text-detailPrimary h-5 sm:h-7 animate-pulse' />
                <p className='text-lg sm:text-2xl'>{pageInfo?.email}</p>
              </div>
              <div className='flex items-center space-x-5 justify-start sm:justify-center'>
                <MapPinIcon className='text-detailPrimary h-5 sm:h-7 animate-pulse' />
                <p className='text-lg sm:text-2xl'>{pageInfo?.address}</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} action="" className='flex flex-col space-y-2 w-full sm:w-fit sm:mx-auto'>
          <div className='flex flex-col w-full space-y-2 sm:block sm:space-y-0 sm:space-x-2'>
            <input
              placeholder="Name"
              className='contactInput'
              type="text"
              {...register("name")}
            />
            <input
              placeholder="Email"
              className='contactInput'
              type="email"
              {...register("email")}
            />
          </div>
          <input
            placeholder="Subject"
            className='contactInput'
            type="text"
            {...register("subject")}
          />
          <textarea
            placeholder="Message"
            rows={5}
            className='contactInput resize-none '
            {...register("message")}
          />
          <button
            className='bg-detailPrimary py-5 px-10 rounded-md text-detailBlack font-bold disabled:bg-detailPrimary40 transition duration-300'
            type="submit"
            disabled={isSubmitDisabled}
          >
            Submit
          </button>
        </form>
      </div>

    </div>
  )
}
