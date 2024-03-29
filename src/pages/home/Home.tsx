import Display from '../../components/display/Display';
import Form from '../../components/form/Form';

const Home = () => {
  return (
    <div className="container mx-auto flex flex-1 justify-center items-center">
      <div className="p-10 bg-brand-grey w-full xs:w-full sm:w-full md:w-[90%] lg:w-2/3  py-20 rounded-lg">
        <Display />
        <Form />
      </div>
    </div>
  );
};

export default Home;
