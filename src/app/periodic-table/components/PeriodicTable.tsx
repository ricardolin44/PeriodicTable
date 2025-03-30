import { periodicTableColors, groupBlockToColor } from '@/data/predefined/colorConst';
import { ElementData, PeriodicTableData, PeriodicTableLabel } from '@/types/type';
import periodicTableLabel from '@/data/periodicTableLabel.json';

interface PeriodicTableProps {
  data: PeriodicTableData;
  setSelectedElement: (element: ElementData | null) => void;
}

const PeriodicTable = (props: PeriodicTableProps) => {
  const label: PeriodicTableLabel = periodicTableLabel;
  return (
    <div
      className="grid gap-1.5 w-full"
      style={{
        gridTemplateColumns: 'repeat(19, minmax(0, 1fr))',
        gridTemplateRows: 'repeat(11, minmax(0, 1fr))',
      }}
    >
      {label.groups.map(group => (
        <div
          key={group.label}
          className="text-text-muted flex flex-col justify-end items-center p-2"
          style={{
            gridColumn: group.column + 1,
            gridRow: group.row,
          }}
        >
          <div className="text-xl">{group.label}</div>
          <div className="text-xl">{group.notation}</div>
        </div>
      ))}
      {label.periods.map(period => (
        <div
          key={period.label}
          className="text-text-muted justify-center items-center flex"
          style={{
            gridColumn: period.column,
            gridRow: period.row,
          }}
        >
          <div className="text-xl">{period.label}</div>
        </div>
      ))}
      {label.cards.map(card => {
        const color =
          card.label === 'Lanthanoid'
            ? periodicTableColors.lanthanoid.dark
            : periodicTableColors.actinoid.dark;
        return (
          <div
            key={card.label}
            className="text-text-muted justify-center items-center flex flex-col w-full h-full border rounded-lg font-bold"
            style={{
              gridColumn: card.column + 1,
              gridRow: card.row + 1,
              borderColor: color,
              color: color,
            }}
          >
            <div className="text-xs">{card.range}</div>
            <div className="text-xs">{card.label}</div>
          </div>
        );
      })}
      {Object.values(props.data).map(element => {
        const groupColor =
          periodicTableColors[groupBlockToColor[element.group_block]]?.dark || '#CCCCCC';
        const hoverColor =
          periodicTableColors[groupBlockToColor[element.group_block]]?.light || '#FFFFFF';

        return (
          <div
            key={element.number}
            className="relative"
            style={{
              gridColumn:
                element.group === 3 && element.period === 6
                  ? element.group + (element.number - 57) + 1
                  : element.group === 3 && element.period === 7
                    ? element.group + (element.number - 89) + 1
                    : element.group + 1,
              gridRow:
                element.group === 3 && element.period === 6
                  ? 10
                  : element.group === 3 && element.period === 7
                    ? 11
                    : element.period + 1,
            }}
          >
            <button
              aria-label={`Select ${element.name}`}
              className={`w-full h-full px-1 py-0 bg-transparent hover:border-periodicBackground-light transition-colors duration-300 rounded-md`}
              style={{
                border: `1px solid ${groupColor}`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = `0 0 10px ${hoverColor}`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = `${groupColor}`;
              }}
              onClick={() => props.setSelectedElement(element)}
            >
              <div
                className="flex flex-col justify-center items-center h-full font-bold"
                style={{ color: groupColor }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = `${hoverColor}`;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = `${groupColor}`;
                }}
              >
                <div className="absolute top-1 right-1 text-[0.40rem] leading-4">
                  {element.atomic_mass}
                </div>
                <div className="absolute top-1 left-1 text-xs">{element.number}</div>
                <div className="text-2xl">{element.symbol}</div>
                <div className="text-[0.5rem]">{element.name}</div>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PeriodicTable;
