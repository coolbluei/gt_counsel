<?php

// @codingStandardsIgnoreFile

$databases['default']['default'] = array (
  'database' => 'generalcounsel',
  'username' => 'generalcounsel',
  'password' => 'k!Q4vf401',
  'prefix' => '',
  'host' => 'localhost',
  'port' => '',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'driver' => 'mysql',
  'init_commands' => [
    'isolation_level' => 'SET SESSION TRANSACTION ISOLATION LEVEL READ COMMITTED',
  ],
);

$settings['config_sync_directory'] = '../config/sync';
$settings['hash_salt'] = 'RhxTYq1ig-3QnSeq1rred4444CxfMKPP2T7rMMxrrrde445teeZCSwDZQ';
$settings['update_free_access'] = FALSE;
$settings['container_yamls'][] = $app_root . '/' . $site_path . '/services.yml';

$settings['trusted_host_patterns'] = [
  '^generalcounsel\.gatech.edu$',
  '^www\.generalcounsel\.gatech.edu$',
];

$settings['file_scan_ignore_directories'] = [
  'node_modules',
  'bower_components',
];

$settings['entity_update_batch_size'] = 50;
$settings['entity_update_backup'] = TRUE;
$settings['skip_permissions_hardening'] = TRUE;
$settings["file_temp_path"] = '/tmp';
$settings['file_private_path'] = 'sites/default/files/private';
$settings['state_cache'] = TRUE;
