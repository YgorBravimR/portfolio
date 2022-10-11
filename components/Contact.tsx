import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
};

export function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => (
    window.location.href = `mailto:ygorbravimr@gmail?subject=${formData.subject}&body=  Hey, my name is ${formData.name}. ${formData.message} (${formData.email})`
  );
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly ms-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-textSecondary text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Let's Talk</span>
        </h4>
        <div className='space-y-10'>
          <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-detailYellow h-7 w-7 animate-pulse' />
            <p className='text-2xl'>+123456789</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-detailYellow h-7 w-7 animate-pulse' />
            <p className='text-2xl'>ygorbravimr@gmail.com</p>
          </div>
          <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-detailYellow h-7 w-7 animate-pulse' />
            <p className='text-2xl'>123 Dev Lane</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} action="" className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
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
            className='bg-detailYellow py-5 px-10 rounded-md text-detailBlack font-bold'
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
