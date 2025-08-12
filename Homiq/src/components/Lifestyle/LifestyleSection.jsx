import { useState } from 'react';
import FamilyLayout from './FamilyLayout';
import YoungLayout from './YoungLayout';
import TranquilityLayout from './TranquilityLayout';
import { PropagateLoader } from 'react-spinners';
const LifestyleSection = () => {
  const [familyFilter, setFamilyFilter] = useState(true);
  const [youngFilter, setYoungFilter] = useState(false);
  const [tranquilityFilter, setTranquilityFilter] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFamily = () => {
    setLoading(true);
    setTimeout(() => {
      setFamilyFilter(true);
      setYoungFilter(false);
      setTranquilityFilter(false);
      setLoading(false);
    }, 400);
  };

  const handleYoung = () => {
    setLoading(true);
    setTimeout(() => {
      setFamilyFilter(false);
      setYoungFilter(true);
      setTranquilityFilter(false);
      setLoading(false);
    }, 400);
  };

  const handleTranquility = () => {
    setLoading(true);
    setTimeout(() => {
      setFamilyFilter(false);
      setYoungFilter(false);
      setTranquilityFilter(true);
      setLoading(false);
    }, 400);
  };

  const view = loading ? (
    <PropagateLoader className='mt-16' color='#4ade80' />
  ) : familyFilter ? (
    <FamilyLayout />
  ) : youngFilter ? (
    <YoungLayout />
  ) : tranquilityFilter ? (
    <TranquilityLayout />
  ) : null;

  return (
    <section className='min-h-screen w-full py-16 px-4 text-center'>
      <h1 className='text-4xl sm:text-5xl md:text-6xl text-green-500 mb-4 font-bold'>
        Lifestyle
      </h1>
      <p className='text-lg sm:text-xl md:text-2xl font-medium mb-8'>
        Where lifestyle is more than just a home
      </p>
      <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10'>
        <button
          onClick={handleFamily}
          className={`border border-green-400 px-6 py-2 rounded-2xl shadow-md text-sm sm:text-base hover:bg-green-400 hover:text-white hover:cursor-pointer ${
            familyFilter ? 'bg-green-400 text-white' : ''
          }`}
        >
          For Families
        </button>
        <button
          onClick={handleYoung}
          className={`border border-green-400 px-6 py-2 rounded-2xl shadow-md text-sm sm:text-base hover:bg-green-400 hover:text-white hover:cursor-pointer ${
            youngFilter ? 'bg-green-400 text-white' : ''
          }`}
        >
          For Young Professionals
        </button>
        <button
          onClick={handleTranquility}
          className={`border border-green-400 px-6 py-2 rounded-2xl shadow-md text-sm sm:text-base hover:bg-green-400 hover:text-white hover:cursor-pointer ${
            tranquilityFilter ? 'bg-green-400 text-white' : ''
          }`}
        >
          For Tranquility
        </button>
      </div>
      <div className='flex justify-center'>{view}</div>
    </section>
  );
};

export default LifestyleSection;
