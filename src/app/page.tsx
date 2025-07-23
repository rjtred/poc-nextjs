'use client'
import React, { useState } from 'react';
import { Flex, Image, Input, Layout, LayoutProps, Menu } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';


const LayoutFH = (props: LayoutProps & { overflow?: 'auto' | 'hidden'}) => {
  const { children, ...layoutProps } = props
  return <Layout {...layoutProps} style={{flex: 1, height: '100%', overflow: props.overflow || 'hidden'}}>
    {children}
  </Layout>
}

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  return (

  <LayoutFH>
    <Header >
      <Flex align='center' justify='space-between' gap={24}>
        <Flex flex={'0'} align='center' justify='flex-start' gap={8} >
          <Image alt='logo' style={{flex: 1}} width={200} preview={false} src={'https://logosbynick.com/wp-content/uploads/2018/03/final-logo-example.png'} />
        </Flex>
        <Flex flex={'1 0'} align='center' justify='center' gap={8} >
          <Menu
            mode='horizontal'
            theme="dark"
            defaultSelectedKeys={['1']}
            style={{ flex: 'auto', width: '100%', justifyContent: 'flex-end' }}
            items={
              [
                {
                  key: '1',
                  label: 'Nav 1'
                },
                {
                  key: '2',
                  label: 'Nav 2'
                },
                {
                  key: '3',
                  label: 'Nav 3'
                }
              ]
            }
          />
          <Input 
            style={{ flex: 'auto', width: '300px', justifyContent: 'flex-end' }}
          />
        </Flex>
      </Flex>
    </Header>
    <LayoutFH hasSider>
      <Sider width='20%' trigger={null} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
          items={
            [
              {
                key: '1',
                label: 'Nav 1'
              },
              {
                key: '2',
                label: 'Nav 2'
              },
              {
                key: '3',
                label: 'Nav 3'
              }
            ]}
        />
      </Sider>
      <Content>
        <LayoutFH>

        </LayoutFH>
      </Content>
    </LayoutFH>
    <Footer ></Footer>
  </LayoutFH>
)
}
export default Home;