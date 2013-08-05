///<reference path="../_ref.ts" />

///<reference path="../../src/tsd/context.ts" />

declare var assert:chai.Assert;

module tsd {

	var fs = require('fs');
	var path = require('path');
	var rimraf = require('rimraf');

	var _:UnderscoreStatic = <UnderscoreStatic>require('underscore');

	
	describe('Paths', () => {
		var paths:tsd.Paths;
		it('is defined as function', () => {
			assert.isFunction(tsd.Paths);
		});
		//more in Context
	});

	describe('Config', () => {
		var cfg:tsd.Config;
		it('is defined as function', () => {
			assert.isFunction(tsd.Config);
		});
		//more in Context
	});

	describe('PackageInfo', () => {
		var info:tsd.PackageInfo;
		it('is defined as function', () => {
			assert.isFunction(tsd.PackageInfo);
		});
		describe('local', () => {
			it('should return instance', () => {
				info = PackageInfo.getLocal();
				assert.isObject(info, 'info');
			});
			it('should have properties', () => {
				assert.isString(info.name, 'name');
				assert.isString(info.version, 'version');
				assert.isObject(info.pkg, 'pkg');
			});
		});
		//more in Context
	});

	describe('Context', () => {

		it('is defined as function', () => {
			assert.isFunction(tsd.Context);
		});

		describe('default', () => {

			var ctx:tsd.Context;
			var schema:any;

			before(() => {
				schema = xm.FileUtil.readJSONSync('schema/tsd-config_v4.json');
				ctx = new Context();
			});
			it('is instance', () => {
				assert.ok(ctx);
			});
			it('exports packageInfo', () => {
				assert.isObject(ctx.packageInfo, 'packageInfo');
				assert.isString(ctx.packageInfo.name, 'name');
				assert.isString(ctx.packageInfo.version, 'version');
				assert.isObject(ctx.packageInfo.pkg, 'pkg');
			});
			it('exports paths', () => {
				assert.isObject(ctx.paths, 'paths,');
				assert.isString(ctx.paths.tmp, 'tmp');
				assert.isString(ctx.paths.typings, 'typings');
				assert.isString(ctx.paths.cache, 'cache');
				assert.isString(ctx.paths.config, 'config');
			});
			it('exports config', () => {
				assert.isObject(ctx.config, 'config');
				assert.isString(ctx.config.typingsPath, 'typingsPath');
				assert.isString(ctx.config.version, 'version');
				assert.isString(ctx.config.repo, 'repo');
				assert.isString(ctx.config.ref, 'ref');
				assert.isObject(ctx.config.installed, 'installed');
			});
			it('exports valid formed config json', () => {
				assert.jsonSchema(ctx.config.toJSON(), schema, 'toJSON');
			});
		});
	});
}
