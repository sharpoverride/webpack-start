import * as React from 'react'

import {Block, Text, Divider} from 'essence-core';

import Paper from 'essence-paper';
import AppBar from 'essence-appbar';
import Menu from 'essence-menu';
import Icon from 'essence-icon';

export default class Demo extends React.Component {
    static displayName = 'Demo';
    changeTitle() {

    }

    render() {
        return (
                <AppBar className={'e-background-blue-600 e-text-white'}
                    >
                    <Menu type={'cover'} icon={'navigation-more-vert'} className={'e-left'}>
                        <Text className={'e-text-black'}>
                            <Text onClick={this.changeTitle.bind(this, 'Toasts') }>
                                <Text>Change Title</Text>
                                <Text type={'strong'}>Toasts</Text>
                            </Text>
                        </Text>
                        <Text className={'e-text-black'}>
                            <Text onClick={this.changeTitle.bind(this, 'SnackBars') }>
                                <Text>Change Title</Text>
                                <Text type={'strong'}>SnackBars</Text>
                            </Text>
                        </Text>
                        <Text className={'e-text-black'}>
                            <Text onClick={this.changeTitle.bind(this, 'Data Table') }>
                                <Text>Change Title</Text>
                                <Text type={'strong'}>Data Table</Text>
                            </Text>
                        </Text>
                    </Menu>
                    <Text>Some App Title</Text>

                    <Block className={'e-right'}>
                        <Menu type={'cover'} icon={'action-settings'} className={'e-right'}>
                            <Text className={'e-text-black'}>
                                <Text type={'a'} href={'#icons'}>Link to: Icons</Text>
                            </Text>
                            <Text className={'e-text-black'}>
                                <Text type={'a'} href={'#button'}>Link to: Buttons</Text>
                            </Text>
                            <Text className={'e-text-black'}>
                                <Text type={'a'} href={'#core'}>Link to: Essence Core</Text>
                            </Text>
                        </Menu>
                    </Block>

                </AppBar>

        );
    }
}
