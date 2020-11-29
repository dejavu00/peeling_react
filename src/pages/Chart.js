//首先引入组件
import React, { useState } from 'react';
import { Checkbox, Collapse } from 'antd'
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Pear', 'Orange'];
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function ChartBox() {
  const [checkedList, setCheckedList] = useState(['Apple', 'Pear', 'Orange']);
  const [indeterminate, setIndeter] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  function onChange(checkedList) {
    setCheckedList(checkedList);
    setIndeter(!!checkedList.length && (checkedList.length < plainOptions.length));
    setCheckAll(checkedList.length === plainOptions.length);
  }

  function onCheckAllChange(e) {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeter(false);
    setCheckAll(e.target.checked);
  }
  function renderHeaderItem() {
    return (
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
      >
        Check all
      </Checkbox>
    )
  }
  return (
    <div>
      <Collapse activeKey='1' >
        <Panel header={() => renderHeaderItem} key="1">
          <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
      </Collapse>

    </div>
  )
}

export default ChartBox;
