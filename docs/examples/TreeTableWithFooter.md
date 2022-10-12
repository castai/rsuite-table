### Tree

<!--start-code-->

```js
const App = () => {
  const [tree, setTree] = React.useState(true);
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={tree}
          onChange={() => {
            setTree(!tree);
          }}
        />
        isTree
      </label>
      <Table
        wordWrap
        virtualized
        isTree={tree}
        minHeight={260}
        height={400}
        rowKey="key"
        data={fakeTreeData}
        shouldUpdateScroll={false}
        defaultExpandedRowKeys={[0]}
        onExpandChange={(expanded, rowData) => {
          console.log(expanded, rowData);
        }}
        renderTreeToggle={(icon, rowData, expanded) => {
          if (rowData.labelName === '手机') {
            return <i className="icon icon-spin icon-spinner" />;
          }
          return icon;
        }}
        footerHeight={50}
      >
        <Column width={100}>
          <HeaderCell>Key</HeaderCell>
          <Cell dataKey="key" />
          <FooterCell><span>F</span></FooterCell>
        </Column>

        <Column flexGrow={1} treeCol>
          <HeaderCell>Name (Tree Col)</HeaderCell>
          <Cell dataKey="name" />
          <FooterCell><span>F</span></FooterCell>
        </Column>

        <Column width={120}>
          <HeaderCell>Country</HeaderCell>
          <Cell dataKey="country" />
          <FooterCell><span>F</span></FooterCell>
        </Column>

        <Column width={150}>
          <HeaderCell>Status</HeaderCell>
          <Cell dataKey="status" />
          <FooterCell><span>F</span></FooterCell>
        </Column>

        <Column width={150}>
          <HeaderCell>Count</HeaderCell>
          <Cell dataKey="count" />
          <FooterCell><span>F</span></FooterCell>
        </Column>
      </Table>
    </div>
  );
};

ReactDOM.render(<App />);
```

<!--end-code-->
