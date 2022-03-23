import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styled from "styled-components";

// Repositories
export const STabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
`;
export const STabList = styled(TabList)`
  padding: 4px;
  list-style-type: none;
  margin: 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

STabList.tabsRole = "TabList";

export const STab = styled(Tab)`
  border-radius: 5px;
  background: #1e1e1e;
  padding: 8px;
  cursor: pointer;
  user-select: none;
  margin-right: 5px;

  &:focus {
    outline: none;
  }
  &.is-selected {
    border-bottom: 10px solid #292929;
    background: #292929;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    z-index: 999;
  }
`;

export const STabPanel = styled(TabPanel)`
  background: #292929;
  margin: -4px 0 0 4px;
  padding: 5%;
  border-top-left-radius: 0;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: none;
  z-index: 0;

  &.is-selected {
    display: block;
  }
`;

export const Wrapper = styled.div`
  line-height: 0.5;
`;
