/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


DROP TABLE IF EXISTS `casbin_rule`;
CREATE TABLE `casbin_rule` (
`id` bigint unsigned NOT NULL AUTO_INCREMENT,
`ptype` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`v0` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`v1` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`v2` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`v3` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`v4` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`v5` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`v6` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`v7` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
PRIMARY KEY (`id`),
UNIQUE KEY `idx_casbin_rule` (`ptype`,`v0`,`v1`,`v2`,`v3`,`v4`,`v5`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `exa_customers`;
CREATE TABLE `exa_customers` (
`id` bigint unsigned NOT NULL AUTO_INCREMENT,
`created_at` datetime(3) DEFAULT NULL,
`updated_at` datetime(3) DEFAULT NULL,
`deleted_at` datetime(3) DEFAULT NULL,
`customer_name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '客户名',
`customer_phone_data` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '客户手机号',
`sys_user_id` bigint unsigned DEFAULT NULL COMMENT '管理ID',
`sys_user_authority_id` bigint unsigned DEFAULT NULL COMMENT '管理角色ID',
PRIMARY KEY (`id`),
KEY `idx_exa_customers_deleted_at` (`deleted_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `exa_file_chunks`;
CREATE TABLE `exa_file_chunks` (
`id` bigint unsigned NOT NULL AUTO_INCREMENT,
`created_at` datetime(3) DEFAULT NULL,
`updated_at` datetime(3) DEFAULT NULL,
`deleted_at` datetime(3) DEFAULT NULL,
`exa_file_id` bigint unsigned DEFAULT NULL,
`file_chunk_number` bigint DEFAULT NULL,
`file_chunk_path` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
PRIMARY KEY (`id`),
KEY `idx_exa_file_chunks_deleted_at` (`deleted_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `exa_files`;
CREATE TABLE `exa_files` (
`id` bigint unsigned NOT NULL AUTO_INCREMENT,
`created_at` datetime(3) DEFAULT NULL,
`updated_at` datetime(3) DEFAULT NULL,
`deleted_at` datetime(3) DEFAULT NULL,
`file_name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`file_md5` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`file_path` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
`chunk_total` bigint DEFAULT NULL,
`is_finish` tinyint(1) DEFAULT NULL,
PRIMARY KEY (`id`),
KEY `idx_exa_files_deleted_at` (`deleted_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `sys_apis`;
CREATE TABLE `sys_apis` (
`id` bigint unsigned NOT NULL AUTO_INCREMENT,
`created_at` datetime(3) DEFAULT NULL,
`updated_at` datetime(3) DEFAULT NULL,
`deleted_at` datetime(3) DEFAULT NULL,
`path` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'api路径',
`description` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'api中文描述',
`api_group` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'api组',
`method` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'POST' COMMENT '方法',
PRIMARY KEY (`id`),
KEY `idx_sys_apis_deleted_at` (`deleted_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `sys_authorities`;
CREATE TABLE `sys_authorities` (
`created_at` datetime(3) DEFAULT NULL,
`updated_at` datetime(3) DEFAULT NULL,
`deleted_at` datetime(3) DEFAULT NULL,
`authority_id` bigint NOT NULL AUTO_INCREMENT COMMENT '角色ID',
`authority_name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '角色名',
`parent_id` bigint DEFAULT NULL COMMENT '父角色ID',
`default_router` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'dashboard' COMMENT '默认菜单',
PRIMARY KEY (`authority_id`),
UNIQUE KEY `authority_id` (`authority_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `sys_authority_menus`;
CREATE TABLE `sys_authority_menus` (
`sys_menu_id` bigint NOT NULL,
`sys_authority_authority_id` bigint NOT NULL COMMENT '角色ID',
PRIMARY KEY (`sys_menu_id`,`sys_authority_authority_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `sys_data_authority_id`;
CREATE TABLE `sys_data_authority_id` (
`sys_authority_authority_id` bigint unsigned NOT NULL COMMENT '角色ID',
`data_authority_id_authority_id` bigint unsigned NOT NULL COMMENT '角色ID',
PRIMARY KEY (`sys_authority_authority_id`,`data_authority_id_authority_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `sys_file_upload_and_downloads`;
CREATE TABLE `sys_file_upload_and_downloads` (
`id` bigint unsigned NOT NULL AUTO_INCREMENT,
`created_at` datetime(3) DEFAULT NULL,
`updated_at` datetime(3) DEFAULT NULL,
`deleted_at` datetime(3) DEFAULT NULL,
`name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '文件名',
`url` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '文件地址',
`tag` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '文件标签',
`key` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '编号',
PRIMARY KEY (`id`),
KEY `idx_exa_file_upload_and_downloads_deleted_at` (`deleted_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `sys_jwt_blacklists`;
CREATE TABLE `sys_jwt_blacklists` (
`id` bigint unsigned NOT NULL AUTO_INCREMENT,
`created_at` datetime(3) DEFAULT NULL,
`updated_at` datetime(3) DEFAULT NULL,
`deleted_at` datetime(3) DEFAULT NULL,
`jwt` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COMMENT 'jwt',
PRIMARY KEY (`id`),
KEY `idx_jwt_blacklists_deleted_at` (`deleted_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `sys_menus`;
CREATE TABLE `sys_menus` (
`id` bigint NOT NULL AUTO_INCREMENT,
`created_at` datetime(3) DEFAULT NULL,
`updated_at` datetime(3) DEFAULT NULL,
`deleted_at` datetime(3) DEFAULT NULL,
`menu_level` bigint DEFAULT NULL,
`parent_id` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '父菜单ID',
`path` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '路由path',
`name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '路由name',
`hidden` tinyint(1) DEFAULT NULL COMMENT '是否在列表隐藏',
`component` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '对应前端文件路径',
`sort` bigint DEFAULT NULL COMMENT '排序标记',
`active_name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '附加属性',
`keep_alive` tinyint(1) DEFAULT NULL COMMENT '附加属性',
`default_menu` tinyint(1) DEFAULT NULL COMMENT '附加属性',
`title` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '附加属性',
`icon` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '附加属性',
`close_tab` tinyint(1) DEFAULT NULL COMMENT '附加属性',
`ssr_path` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '服务端组件地址',
PRIMARY KEY (`id`),
KEY `idx_sys_base_menus_deleted_at` (`deleted_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `sys_operation_records`;
CREATE TABLE `sys_operation_records` (
`id` bigint unsigned NOT NULL AUTO_INCREMENT,
`created_at` datetime(3) DEFAULT NULL,
`updated_at` datetime(3) DEFAULT NULL,
`deleted_at` datetime(3) DEFAULT NULL,
`ip` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '请求ip',
`method` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '请求方法',
`path` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '请求路径',
`status` bigint DEFAULT NULL COMMENT '请求状态',
`latency` bigint DEFAULT NULL COMMENT '延迟',
`agent` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '代理',
`error_message` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '错误信息',
`body` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COMMENT '请求Body',
`resp` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci COMMENT '响应Body',
`user_id` bigint unsigned DEFAULT NULL COMMENT '用户id',
PRIMARY KEY (`id`),
KEY `idx_sys_operation_records_deleted_at` (`deleted_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `sys_user_authority`;
CREATE TABLE `sys_user_authority` (
`sys_user_id` bigint NOT NULL,
`sys_authority_authority_id` bigint NOT NULL COMMENT '角色ID',
PRIMARY KEY (`sys_user_id`,`sys_authority_authority_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `sys_users`;
CREATE TABLE `sys_users` (
`id` bigint unsigned NOT NULL AUTO_INCREMENT,
`created_at` datetime(3) DEFAULT NULL,
`updated_at` datetime(3) DEFAULT NULL,
`deleted_at` datetime(3) DEFAULT NULL,
`uuid` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '用户UUID',
`username` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '用户登录名',
`password` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '用户登录密码',
`nick_name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT '系统用户' COMMENT '用户昵称',
`side_mode` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'dark' COMMENT '用户侧边主题',
`header_img` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'https://qmplusimg.henrongyi.top/gva_header.jpg' COMMENT '用户头像',
`base_color` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT '#fff' COMMENT '基础颜色',
`active_color` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT '#1890ff' COMMENT '活跃颜色',
`authority_id` bigint unsigned DEFAULT '888' COMMENT '用户角色ID',
`phone` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '用户手机号',
`email` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '用户邮箱',
`enable` bigint DEFAULT '1' COMMENT '用户是否被冻结 1正常 2冻结',
PRIMARY KEY (`id`),
KEY `idx_sys_users_deleted_at` (`deleted_at`),
KEY `idx_sys_users_uuid` (`uuid`),
KEY `idx_sys_users_username` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `casbin_rule` (`id`, `ptype`, `v0`, `v1`, `v2`, `v3`, `v4`, `v5`, `v6`, `v7`) VALUES
(1, 'p', '1', '/_sys/api/all', 'POST', '', '', '', NULL, NULL),
(2, 'p', '1', '/_sys/api/page', 'POST', '', '', '', NULL, NULL),
(3, 'p', '1', '/_sys/api/getById', 'POST', '', '', '', NULL, NULL),
(4, 'p', '1', '/_sys/api', 'POST', '', '', '', NULL, NULL),
(5, 'p', '1', '/_sys/api', 'PATCH', '', '', '', NULL, NULL),
(6, 'p', '1', '/_sys/api', 'DELETE', '', '', '', NULL, NULL),
(7, 'p', '1', '/_sys/user/page', 'POST', '', '', '', NULL, NULL),
(8, 'p', '1', '/_sys/user/adminRegister', 'POST', '', '', '', NULL, NULL),
(9, 'p', '1', '/_sys/user/changePassword', 'PATCH', '', '', '', NULL, NULL),
(10, 'p', '1', '/_sys/user/setUserAuthority', 'PATCH', '', '', '', NULL, NULL),
(11, 'p', '1', '/_sys/user/setUserInfo', 'PATCH', '', '', '', NULL, NULL),
(12, 'p', '1', '/_sys/user/setUserAuthorities', 'PATCH', '', '', '', NULL, NULL),
(13, 'p', '1', '/_sys/user/resetPassword', 'PATCH', '', '', '', NULL, NULL),
(14, 'p', '1', '/_sys/user', 'DELETE', '', '', '', NULL, NULL),
(15, 'p', '1', '/_sys/menu/getAll', 'POST', '', '', '', NULL, NULL),
(16, 'p', '1', '/_sys/menu/getByAuthorityId', 'POST', '', '', '', NULL, NULL),
(17, 'p', '1', '/_sys/menu/getById', 'POST', '', '', '', NULL, NULL),
(18, 'p', '1', '/_sys/menu/add', 'POST', '', '', '', NULL, NULL),
(19, 'p', '1', '/_sys/menu/addMenuAuthority', 'POST', '', '', '', NULL, NULL),
(20, 'p', '1', '/_sys/menu', 'DELETE', '', '', '', NULL, NULL),
(21, 'p', '1', '/_sys/menu', 'PATCH', '', '', '', NULL, NULL),
(22, 'p', '1', '/_sys/casbin/getPolicyPathByAuthorityId', 'POST', '', '', '', NULL, NULL),
(23, 'p', '1', '/_sys/casbin', 'PATCH', '', '', '', NULL, NULL),
(24, 'p', '1', '/_sys/authority/page', 'POST', '', '', '', NULL, NULL),
(25, 'p', '1', '/_sys/authority', 'POST', '', '', '', NULL, NULL),
(26, 'p', '1', '/_sys/authority', 'DELETE', '', '', '', NULL, NULL),
(27, 'p', '1', '/_sys/authority', 'PATCH', '', '', '', NULL, NULL),
(28, 'p', '1', '/_sys/authority/setDataAuthority', 'PATCH', '', '', '', NULL, NULL),
(29, 'p', '1', '/_sys/sysOperationRecord', 'DELETE', '', '', '', NULL, NULL),
(30, 'p', '1', '/_sys/sysOperationRecord/findSysOperationRecord', 'GET', '', '', '', NULL, NULL),
(31, 'p', '1', '/_sys/sysOperationRecord/getSysOperationRecordList', 'GET', '', '', '', NULL, NULL),
(32, 'p', '1', '/_sys/fileUploadAndDownload/upload', 'POST', '', '', '', NULL, NULL),
(33, 'p', '1', '/_sys/fileUploadAndDownload/getFileList', 'POST', '', '', '', NULL, NULL),
(34, 'p', '1', '/_sys/fileUploadAndDownload/deleteFile', 'POST', '', '', '', NULL, NULL),
(35, 'p', '1', '/_sys/fileUploadAndDownload/editFileName', 'POST', '', '', '', NULL, NULL),
(36, 'p', '1', '/_sys/fileUploadAndDownload/breakpointContinue', 'POST', '', '', '', NULL, NULL),
(37, 'p', '1', '/_sys/fileUploadAndDownload/findFile', 'GET', '', '', '', NULL, NULL),
(38, 'p', '1', '/_sys/fileUploadAndDownload/breakpointContinueFinish', 'POST', '', '', '', NULL, NULL),
(39, 'p', '1', '/_sys/fileUploadAndDownload/removeChunk', 'POST', '', '', '', NULL, NULL),
(40, 'p', '1', '/_sys/menu/getByUserId', 'POST', '', '', '', NULL, NULL),
(41, 'p', '1', '/_sys/jwt/jsonInBlacklist', 'POST', '', '', '', NULL, NULL),
(42, 'p', '1', '/_sys/user/getUserInfo', 'POST', '', '', '', NULL, NULL),
(43, 'p', '1', '/_sys/login', 'POST', '', '', '', NULL, NULL),
(44, 'p', '1', '/_sys/captcha', 'POST', '', '', '', NULL, NULL),
(45, 'p', '1', '/_sys/user/setSelfInfo', 'PATCH', '', '', '', NULL, NULL);

INSERT INTO `sys_authorities` (`created_at`, `updated_at`, `deleted_at`, `authority_id`, `authority_name`, `parent_id`, `default_router`) VALUES
('2023-05-04 02:37:16.923', '2023-06-19 10:32:09.056', NULL, 1, 'superAdmin', 0, 'dashboard');

INSERT INTO `sys_authority_menus` (`sys_menu_id`, `sys_authority_authority_id`) VALUES
(-12, 1),
(-11, 1),
(-10, 1),
(-9, 1),
(-8, 1),
(-7, 1),
(-6, 1),
(-5, 1),
(-4, 1),
(-3, 1),
(-2, 1),
(-1, 1);

INSERT INTO `sys_user_authority` (`sys_user_id`, `sys_authority_authority_id`) VALUES
(1, 1);

INSERT INTO `sys_users` (`id`, `created_at`, `updated_at`, `deleted_at`, `uuid`, `username`, `password`, `nick_name`, `side_mode`, `header_img`, `base_color`, `active_color`, `authority_id`, `phone`, `email`, `enable`) VALUES
(1, '2023-04-29 20:38:12.443', '2023-06-19 10:17:52.084', NULL, 'f9209ecc-7b8e-4357-b2f4-389b6a3a1f0a', 'admin', '$2a$10$rZ7gxMt71JQZOEdN0jKznuqqjvn12h9hdxz.Od4uKTJSwKV08jcxO', 'super', 'dark', '', '#fff', '#1890ff', 1, '12345678901', 'goAmin80@80.com', 1);



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;