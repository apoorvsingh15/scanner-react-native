import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import Constants from '../../constants';
import { WithNetworkStatus } from '../../components';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Constants.Colors.DASHBOARD_BG_COLOR,
    flex: 1,
  },
});

const Messages = () => <View style={styles.container} />;

const mapStateToProps = ({
  network: { isConnected }, user: { movies },
}) => ({
  isConnected, movies,
});

export default connect(
  mapStateToProps,
)(WithNetworkStatus(Messages));
