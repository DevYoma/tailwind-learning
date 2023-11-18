import { offer } from '../assets/images';
import Button from '../components/Button';
import { arrowRight } from '../assets/icons';

const SpecialOffer = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img 
          src={offer} 
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Explore our exclusive limited-time offer! Elevate your shoe game with discounts on premium styles. Don't miss out on the chance to step into luxury at unbeatable prices. Shop now!</p>

        <p className="mt-6 lg:max-w-lg info-text">Indulge in savings and step out in style. Our special offer brings you trendy footwear at irresistible prices. Upgrade your wardrobe with high-quality shoes without breaking the bank. Limited stock, act fast!</p>

        <div className="mt-11 flex flex-wrap gap-4">
          <Button 
            label="Shop now" 
            iconURL={arrowRight}
          />
          <Button 
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer