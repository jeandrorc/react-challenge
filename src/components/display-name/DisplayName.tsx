import { Element } from 'types/element';

interface DisplayNameProps {
  name: string;
  element?: Element;
}

const DisplayName: React.FC<DisplayNameProps> = ({ name, element }) => {
  if (!element || !element.symbol) {
    return <div>{name}</div>;
  }

  const symbolIndex = name.toLowerCase().indexOf(element.symbol.toLowerCase());
  if (symbolIndex === -1) {
    return <div>{name}</div>;
  }

  const beforeSymbol = name.substring(0, symbolIndex);
  const symbolText = name.substring(
    symbolIndex,
    symbolIndex + element.symbol.length
  );
  const afterSymbol = name.substring(symbolIndex + element.symbol.length);

  return (
    <div>
      {beforeSymbol}
      <span className="bg-brand-green px-2">{symbolText}</span>
      {afterSymbol}
    </div>
  );
};

export default DisplayName;
