import { useAppSelector } from 'app/hooks/useAppSelector';
import DisplayName from 'components/display-name/DisplayName';
import Loading from 'components/loading/Loading';

const Display = () => {
  const { form, element } = useAppSelector((state) => state);
  return (
    <div className="py-[60px] text-gray-light font-bold text-giant text-center">
      {!element.loading && (
        <>
          <DisplayName
            name={form.firstName}
            element={element.elementFirstName}
          />
          <DisplayName name={form.lastName} element={element.elementLastName} />
        </>
      )}
      {element.loading && <Loading />}
    </div>
  );
};

export default Display;
