import { useForm } from 'react-hook-form';
import './contactS.css'

export default function ContactS() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (

    <form onSubmit={handleSubmit(onSubmit)} className='bodyContactS'>

      <h3 className='formHeader'>Talk with me BRO 🐱‍👤</h3>

      <input className='formName' type="text" placeholder="Nombre" {...register("Name", {})} />

      <input className='formEmail' type="email" placeholder="Email" {...register("Email", {pattern: /@/i})} />

      
      <textarea className='formTextArea' placeholder="Tu mensaje" {...register} />

      <input className='formButton' type="submit" />

    </form>
  );
}
