import Button from "./Button/Button";

function Tabs({ tabList, selectedTab, setSelectedTab }) {
  return (
    <div>
      {tabList.map((tab) => {
        return (
          <Button
            key={tab}
            isSelected={selectedTab === tab}
            selectedStyles={selectedButtonStyles[selectedTabStyleType]}
            styles={buttonStyles}
            type="button"
            onClick={() => setSelectedTab}
          >
            {tab}
          </Button>
        );
      })}
    </div>
  );
}
export default Tabs;
