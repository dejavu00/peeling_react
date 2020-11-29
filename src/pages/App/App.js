import React from 'react';
import { Form, Input, Icon, Button, Progress, Layout } from 'antd';
import './App.less';
import theme1 from '../../theme/theme1.json'
import theme2 from '../../theme/theme2.json'
let id = 0;

const { Header, Footer, Content, Sider } = Layout;
class DynamicFieldSet extends React.Component {
  
  state = {
    num: 1
  };

  componentDidMount() {
    window.less
    .modifyVars(theme1)
    .then(res => {
      console.log('res', res)
    })
    .catch(error => {
      console.log(error);
    });
  }

  remove = k => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  };

  add = () => {
    const { form } = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(id++);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { keys, names } = values;
        console.log('Received values of form: ', values);
        console.log('Merged values:', keys.map(key => names[key]));
      }
    });
  };
  themeChangeCallback = color => {
    document.getElementById('my-header-bar').style.backgroundColor = color;
  }
  getTheme = data => {
    console.log('num', this.state.num)
    this.setState({
      num: this.state.num ? 0 : 1
    })
    const customThemeArr = [theme1, theme2]
    window.less
      .modifyVars(customThemeArr[this.state.num])
      .then(res => {
        console.log('res', res)
      })
      .catch(error => {
        console.log(error);
      });
  };
  render () {
    const { getFieldDecorator, getFieldValue } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
      },
    };
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
      },
    };
    getFieldDecorator('keys', { initialValue: [] });
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => (
      <Form.Item
        {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
        label={index === 0 ? 'Passengers' : ''}
        required={false}
        key={k}
      >
        {getFieldDecorator(`names[${k}]`, {
          validateTrigger: ['onChange', 'onBlur'],
          rules: [
            {
              required: true,
              whitespace: true,
              message: "Please input passenger's name or delete this field.",
            },
          ],
        })(<Input placeholder="passenger name" style={{ width: '60%', marginRight: 8 }} />)}
        {keys.length > 1 ? (
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            onClick={() => this.remove(k)}
          />
        ) : null}
      </Form.Item>
    ));
    return (
      <>
<Layout>
      <span className="test">HHAHHDFD</span>
      <Header><Button type="primary" onClick={this.getTheme}>换肤</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger">Danger</Button>
            <Button type="link">Link</Button></Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <Progress percent={70} status="exception" />
            <Progress percent={100} />
            <Progress percent={50} showInfo={false} />
            <Form onSubmit={this.handleSubmit}>
              {formItems}
              <Form.Item {...formItemLayoutWithOutLabel}>
                <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
                  <Icon type="plus" /> Add field
               </Button>
              </Form.Item>
              <Form.Item {...formItemLayoutWithOutLabel}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
            </Content>
      </Layout>
      <Footer>Footer</Footer>
      <div className="common-modal">ABCD</div>
    </Layout>
      </>
    );
  }
}

export default Form.create()(DynamicFieldSet);