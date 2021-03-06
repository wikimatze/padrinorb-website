### 0.13.0.rc1 (not released)

- DELETE remove deprecations (String#undent, #link_to with :fragment, old caching,
  old form builder, rendering #fetch_template_file, #cache_template_file!, #resolved_layout,
  Application#load_paths, Padrino.set_load_paths, Padrino.load_paths)


### 0.12.4 (October 19th 2014)

- FIX [#1744](http://github.com/padrino/padrino-framework/issues/1744) Corrects color support for Windows ([@tyabe](http://github.com/tyabe))
- FIX [#1736](http://github.com/padrino/padrino-framework/issues/1736) Regression with textarea helper ([@ujifgc](http://github.com/ujifgc))
- FIX [#1743](http://github.com/padrino/padrino-framework/issues/1743) Add a padrino-gen generator for creating new Helpers ([@dariocravero](http://github.com/dariocravero))
- FIX [#1746](http://github.com/padrino/padrino-framework/issues/1746) Avoid reloading the file if its path is not started with Padrino.root ([@namusyaka](http://github.com/namusyaka))
- DELETE deprecated `build_object` method ([@namusyaka](http://github.com/namusyaka))
- FIX [#1752](http://github.com/padrino/padrino-framework/issues/1752) Don't set the `@_use_format` variable when provides method is called ([@namusyaka](http://github.com/@namusyaka))
- FIX [#48](http://github.com/padrino/padrino-framework/issues/48) Update mailer documentation and sample code ([@postmodern](http://github.com/postmodern))
- FIX [#1752](http://github.com/padrino/padrino-framework/issues/1752) Refactor routing code to avoid weird parameter ([@namusyaka](http://github.com/namusyaka))
- FIX [#1754](http://github.com/padrino/padrino-framework/issues/1754) Adds end tags to admin erb template for index ([@namusyaka](http://github.com/namusyaka))
- FIX [#1749](http://github.com/padrino/padrino-framework/issues/1749) Replace the `AR::ConnectionManagement` middleware with new middleware ([@namusyaka](http://github.com/namusyaka))
- NEW [#1756](http://github.com/padrino/padrino-framework/issues/1756) Adds support for mysql2 gem in sql rake task helpers ([@d6rkaiz](http://github.com/d6rkaiz))
- FIX [#1761](http://github.com/padrino/padrino-framework/issues/1761) Allow passing upcased string as the app name
- FIX [#1776](http://github.com/padrino/padrino-framework/issues/1776) improve params filtering for routes ([@ujifgc](http://github.com/ujifgc))
- FIX [#1778](http://github.com/padrino/padrino-framework/issues/1778) Various YARD doc inconsistencies or errors ([@claudiob](http://github.com/claudiob))
- FIX [#1765](http://github.com/padrino/padrino-framework/issues/1765) Use controller's base path instead of constant name at controller test ([@namusyaka](http://github.com/namusyaka))
- FIX [#1781](http://github.com/padrino/padrino-framework/issues/1781) Removes the `default_filters` method setting incorrect content-type ([@namusyaka](http://github.com/namusyaka))
- FIX Sinatra compatibility for passing options to the static! method
- FIX [#1585](http://github.com/padrino/padrino-framework/issues/1585) Update HAML to pass tests by upgrading versions ([@ujifgc](http://github.com/ujifgc))
- FIX [#1782](http://github.com/padrino/padrino-framework/issues/1782) make `padrino-gen` detect absolute paths on Windows ([@ujifgc](http://github.com/ujifgc))
- FIX [#1779](http://github.com/padrino/padrino-framework/issues/1779) Use expanded path to request controller's content ([@namusyaka](http://github.com/namusyaka))
- FIX Use yield and flatmap when possible to speed up performance ([@ujifgc](http://github.com/ujifgc))
- NEW [#1787](http://github.com/padrino/padrino-framework/issues/1787) Mounter now supports Rack applications ([@namusyaka](http://github.com/namusyaka))
- FIX [#1788](http://github.com/padrino/padrino-framework/issues/1788) exception that occurs when the free regex route exists ([@namusyaka](http://github.com/namusyaka))
- NEW Merges the padrino-docs guides and content directly into the main repository ([@ujifgc](http://github.com/ujifgc))


## 0.12.3 (August 13th 2014)

- FIX [#1579](http://github.com/padrino/padrino-framework/issues/1579) Update admin deps such as font-awesome, jquery, bootstrap ([@WaYdotNET](http://github.com/WaYdotNET))
- FIX [#1681](http://github.com/padrino/padrino-framework/issues/1681) Set html message part properly within the mailer ([@judofyr](http://github.com/judofyr))
- FIX Refactor application router code into multiple modules ([@ujifgc](http://github.com/ujifgc))
- FIX Cleanup routing controller code by removing code duplication ([@ujifgc](http://github.com/ujifgc))
- DEL [#1684](http://github.com/padrino/padrino-framework/issues/1684) Extract breadcrumbs into padrino-contrib ([@namusyaka](http://github.com/namusyaka))
- FIX [#1690](http://github.com/padrino/padrino-framework/issues/1690) `fields_for` helper should respect the builder of parent ([@namusyaka](http://github.com/namusyaka))
- FIX Update taiwanese translations to fix typos ([@felix125](http://github.com/felix125))
- FIX [#1693](http://github.com/padrino/padrino-framework/issues/1693) Remove `load_paths` and have reloader rely on default prerequisites ([@ujifgc](http://github.com/ujifgc))
- FIX [#1694](http://github.com/padrino/padrino-framework/issues/1694) Setup proper name for helper when generating a skeleton project ([@namusyaka](http://github.com/namusyaka))
- FIX make Padrino server threaded in development if possible ([@ujifgc](http://github.com/ujifgc))
- FIX [#1697](http://github.com/padrino/padrino-framework/issues/1697) `Padrino::Mailer::Mime.mime_type` detection ([@tyabe](http://github.com/tyabe))
- FIX [#1701](http://github.com/padrino/padrino-framework/issues/1701) don't load admin locales automatically ([@dariocravero](http://github.com/dariocravero))
- FIX [#1705](http://github.com/padrino/padrino-framework/issues/1705) Upgrade to RSpec 3 syntax ([@tyabe](http://github.com/tyabe))
- FIX [#1683](http://github.com/padrino/padrino-framework/issues/1683) Test should not depend on the execution order ([@namusyaka](http://github.com/namusyaka))
- NEW [#1708](http://github.com/padrino/padrino-framework/issues/1708) Adds no-helper option to controller generator to skip helpers ([@tyabe](http://github.com/tyabe))
- FIX [#1709](http://github.com/padrino/padrino-framework/issues/1709) tiny app skeleton generator should provide test files ([@namusyaka](http://github.com/namusyaka))
- FIX datamapper sqlite rake tasks ([@ujifgc](http://github.com/ujifgc))
- DEL `Padrino::Admin::Utils::Crypt` as it wasn't being used ([@dariocravero](http://github.com/dariocravero))
- FIX [#1710](http://github.com/padrino/padrino-framework/issues/1710) Adjust path to pre-load the helper ([@namusyaka](http://github.com/namusyaka))
- NEW [#1712](http://github.com/padrino/padrino-framework/issues/1712) Implement `:force` option in the app generator and the model generator ([@namusyaka](http://github.com/namusyaka))
- FIX [#1717](http://github.com/padrino/padrino-framework/issues/1717) make generated 'log' and 'tmp' folders to contain ".keep" file  ([@namusyaka](http://github.com/namusyaka))
- FIX [#1722](http://github.com/padrino/padrino-framework/issues/1722) do not remove external constants ([@ujifgc](http://github.com/ujifgc))
- FIX [#1727](http://github.com/padrino/padrino-framework/issues/1727) do not apply default layout to templates with unsupported engine ([@ujifgc](http://github.com/ujifgc))
- FIX controller-wide expires to be respected ([@ujifgc](http://github.com/ujifgc))
- FIX Do not pass `:submit_options` as an attribute of form element for button ([@namusyaka](http://github.com/namusyaka))
- FIX [#1732](http://github.com/padrino/padrino-framework/issues/1732) Only use initializing with mutex on Java platform ([@ujifgc](http://github.com/ujifgc))
- FIX [#1736](http://github.com/padrino/padrino-framework/issues/1736) Respect the leading newline in textarea value ([@krororo](http://github.com/krororo))
- FIX [#1738](http://github.com/padrino/padrino-framework/issues/1738) Change email condition for default AR4.1 in minirecord ([@tyabe](http://github.com/tyabe))
- FIX [#1733](http://github.com/padrino/padrino-framework/issues/1733) Allow strings in route `:with` option ([@ujifgc](http://github.com/ujifgc))
- FIX [#1740](http://github.com/padrino/padrino-framework/issues/1740) Loosen thor dependency to ~> 0.18 ([@postmodern](http://github.com/postmodern))
- FIX [#1741](http://github.com/padrino/padrino-framework/issues/1741) Fix tests related to the thor generator ([@namusyaka](http://github.com/namusyaka))

NOTE: If you're using the admin locales and you're not using `Padrino::Admin::AccessControl`
you will have to add `register Padrino::Admin` to your `app/app.rb` in order to get the locales in.


### 0.12.2 (May 12th 2014)

- NEW Include all helpers with `include Padrino::Helpers` ([@ujifgc](http://github.com/ujifgc))
- FIX [#1646](http://github.com/padrino/padrino-framework/issues/1646) do not pass `include_blank` as select attribute ([@ujifgc](http://github.com/ujifgc))
- FIX [#1645](http://github.com/padrino/padrino-framework/issues/1645) disable webrick accesslog ([@ujifgc](http://github.com/ujifgc))
- FIX [#1648](http://github.com/padrino/padrino-framework/issues/1648) params is not set correctly in prioritized routes ([@namusyaka](http://github.com/namusyaka))
- FIX [#1651](http://github.com/padrino/padrino-framework/issues/1651) Pass the correct env variable through middleware ([@judofyr](http://github.com/judofyr))
- FIX [#1652](http://github.com/padrino/padrino-framework/issues/1652) Rendering bugs by refactoring template resolution ([@ujifgc](http://github.com/ujifgc))
- NEW [#1653](http://github.com/padrino/padrino-framework/issues/1653) Allow create and drop for sqlite adapter
- FIX [#1654](http://github.com/padrino/padrino-framework/issues/1654) double escape of & in `mail_to` helper ([@rmm5t](http://github.com/rmm5t))
- FIX [#1655](http://github.com/padrino/padrino-framework/issues/1655) Switch to SVG badges in readme for travis
- FIX [#1656](http://github.com/padrino/padrino-framework/issues/1656) Add period and fix types for ja localization
- FIX Do not pass `protect_from_csrf` as an attribute of form element ([@namusyaka](http://github.com/namusyaka))
- FIX The for attribute of the label element must refer to a form control ([@namusyaka](http://github.com/namusyaka))
- NEW [#1661](http://github.com/padrino/padrino-framework/issues/1661) tests for csrf-protection with http header X-CSRF-TOKEN ([@cookiebody](http://github.com/cookiebody))
- FIX [#1663](http://github.com/padrino/padrino-framework/issues/1663) override `setup_session` method to support custom session management ([@cookiebody](http://github.com/cookiebody))
- FIX [#1670](http://github.com/padrino/padrino-framework/issues/1670) url when both `uri_root` and `RACK_BASE_URI` is setting ([@tmtm](http://github.com/tmtm))
- FIX [#1671](http://github.com/padrino/padrino-framework/issues/1671) add options `:fragment` and `:anchor` to #url ([@ujifgc](http://github.com/ujifgc))
- NEW [#1676](http://github.com/padrino/padrino-framework/issues/1676) Change format of `helper.rb.tt` to modular style for testability ([@namusyaka](http://github.com/namusyaka))
- FIX `Rack::Test` does not work on minitest ([@namusyaka](http://github.com/namusyaka))
- FIX [#1662](http://github.com/padrino/padrino-framework/issues/1662) load external libraries only once
- NEW [#905](http://github.com/padrino/padrino-framework/issues/905) implement query param filtering protection ([@ujifgc](http://github.com/ujifgc))


## 0.12.1 (April 4th 2014)

New features:

- NEW [#1574](http://github.com/padrino/padrino-framework/issues/1574) Add dynamoid orm component ([@nof](http://github.com/nof))
- NEW [#1573](http://github.com/padrino/padrino-framework/issues/1573) Add `report_csrf_failure`, enable custom reports ([@ujifgc](http://github.com/ujifgc))
- NEW Introduces `Logger#exception` method for application ([@ujifgc](http://github.com/ujifgc))
- NEW Allow password to be supplied to postgres ([@ct](http://github.com/ct))
- NEW [#1495](http://github.com/padrino/padrino-framework/issues/1495) Adds support for lean generation option ([@ujifgc](http://github.com/ujifgc))
- NEW [#1560](http://github.com/padrino/padrino-framework/issues/1560) Introduces `cache_object` helper ([@dariocravero](http://github.com/dariocravero))
- NEW [#1310](http://github.com/padrino/padrino-framework/issues/1310) Implement `:accepts` option ([@namusyaka](http://github.com/namusyaka))
- FIX [#1260](http://github.com/padrino/padrino-framework/issues/1260) Load `config.ru` with Padrino server ([@ujifgc](http://github.com/ujifgc))
- FIX Respect host and port in config.ru ([@ujifgc](http://github.com/ujifgc))
- FIX [#1622](http://github.com/padrino/padrino-framework/issues/1622) resolve nested relative template ([@ujifgc](http://github.com/ujifgc))

Bug fixes:

- FIX Do not reload controllers twice ([@ujifgc](http://github.com/ujifgc))
- FIX Mimic rack-protection when no handler is defined ([@ujifgc](http://github.com/ujifgc))
- FIX [#1582](http://github.com/padrino/padrino-framework/issues/1582) ensure that captured blocks in erb and slim templates return nil ([@minad](http://github.com/minad))
- FIX [#1584](http://github.com/padrino/padrino-framework/issues/1584) Avoids improper model checking ([@namusyaka](http://github.com/namusyaka))
- FIX the destroyer of sub application ([@namusyaka](http://github.com/namusyaka))
- FIX String escape safety issues with helpers ([@ujifgc](http://github.com/ujifgc))
- FIX `stylesheet_link_tag` and `javascript_include_tag` to use proper concat ([@ujifgc](http://github.com/ujifgc))
- FIX [#1600](http://github.com/padrino/padrino-framework/issues/1600) replaces `html_safe` with more effective `safe_concat` ([@ujifgc](http://github.com/ujifgc))
- FIX [#1595](http://github.com/padrino/padrino-framework/issues/1595) Fix bug in `Padrino::Mounter.app_constant` ([@tyabe](http://github.com/tyabe))
- FIX [#1606](http://github.com/padrino/padrino-framework/issues/1606) Adjust tests to run on newer minitest versions ([@ujifgc](http://github.com/ujifgc))
- FIX [#1609](http://github.com/padrino/padrino-framework/issues/1609) Switch tests to explicit minitest and remove `mini_shoulda` ([@ujifgc](http://github.com/ujifgc))
- FIX [#1615](http://github.com/padrino/padrino-framework/issues/1615) Wait for external DB processes to finish before the task finishes. ([@dariocravero](http://github.com/dariocravero))
- FIX [#1618](http://github.com/padrino/padrino-framework/issues/1618) Wrong value of `named_routes` when specifying the multiple routes and nested ([@namusyaka](http://github.com/namusyaka))
- FIX [#1621](http://github.com/padrino/padrino-framework/issues/1621) Add explicit specification of `ActiveRecord::Base.default_timezone` ([@tyabe](http://github.com/tyabe))
- FIX [#1624](http://github.com/padrino/padrino-framework/issues/1624) Detect path absoluteness properly ([@ujifgc](http://github.com/ujifgc))
- FIX Improve migration generator regex matching ([@namusyaka](http://github.com/namusyaka))
- FIX [#1632](http://github.com/padrino/padrino-framework/issues/1632) improve `PADRINO_ENV` deprecation compatibility ([@ujifgc](http://github.com/ujifgc))
- FIX [#1634](http://github.com/padrino/padrino-framework/issues/1634) Improve caching of template paths ([@ujifgc](http://github.com/ujifgc))
- FIX [#1640](http://github.com/padrino/padrino-framework/issues/1640) allow to run console without readlines ([@ujifgc](http://github.com/ujifgc))
- FIX [#1644](http://github.com/padrino/padrino-framework/issues/1644) Removes the media attribute from default attributes of `stylesheet_link` ([@namusyaka](http://github.com/namusyaka))

Refactoring and cleanup:

- FIX [#1635](http://github.com/padrino/padrino-framework/issues/1635) Move rendering to padrino-helpers ([@ujifgc](http://github.com/ujifgc))
- FIX [#1612](http://github.com/padrino/padrino-framework/issues/1612) Refactor `support_lite` into a padrino-support gem outside of core ([@ujifgc](http://github.com/ujifgc))
- FIX Refactor model generator ([@scudelletti](http://github.com/scudelletti))
- FIX Extract `form_select_helpers` and cleanup ([@ujifgc](http://github.com/ujifgc))
- FIX Cleanup the `error_messages_for` codebase in helpers ([@ujifgc](http://github.com/ujifgc))
- FIX Refactor application code moving setup into an `application_setup` file ([@ujifgc](http://github.com/ujifgc))
- FIX Major rendering refactor and cleanup ([@ujifgc](http://github.com/ujifgc))
- FIX [#1602](http://github.com/padrino/padrino-framework/issues/1602) Refactor the activerecord tasks ([@namusyaka](http://github.com/namusyaka))


## 0.12.0 (February 9th 2014)

- FIX [#1578](http://github.com/padrino/padrino-framework/issues/1578) Fix latvian translations ([@graudeejs](http://github.com/graudeejs))
- FIX [#1576](http://github.com/padrino/padrino-framework/issues/1576) incorrect nl.yml translations ([@fevers](http://github.com/fevers))
- FIX [#1564](http://github.com/padrino/padrino-framework/issues/1564) do not reload apps with disabled or absent `:reload` flag ([@ujifgc](http://github.com/ujifgc))
- FIX [#1571](http://github.com/padrino/padrino-framework/issues/1571) Allow for url generation to accept stringified keys ([@jsmpereira](http://github.com/jsmpereira))
- NEW [#1570](http://github.com/padrino/padrino-framework/issues/1570) add custom index option for `form_for` abstract form helper ([@graudeejs](http://github.com/graudeejs))
- FIX [#1567](http://github.com/padrino/padrino-framework/issues/1567) Add :app option to the component generator ([@namusyaka](http://github.com/namusyaka))
- FIX [#1563](http://github.com/padrino/padrino-framework/issues/1563) Fix behavior of `content_tag` when use with content that is not a string ([@tyabe](http://github.com/tyabe))
- NEW [#1422](http://github.com/padrino/padrino-framework/issues/1422) allow options Hash in `protect_from_csrf` ([@ujifgc](http://github.com/ujifgc))


## 0.12.0.rc3 (January 20th 2014)

- FIX `resolve_template` should respect `:views` option ([@ujifgc](http://github.com/ujifgc))
- FIX [#1547](http://github.com/padrino/padrino-framework/issues/1547) Rename `showexceptions.rb` to `show_exceptions.rb` ([@namusyaka](http://github.com/namusyaka))
- NEW [#1551](http://github.com/padrino/padrino-framework/issues/1551) Introduce `#default` method to set application options ([@ujifgc](http://github.com/ujifgc))
- FIX [#1553](http://github.com/padrino/padrino-framework/issues/1553) Chinese time translations ([@gokure](http://github.com/gokure))
- FIX [#1556](http://github.com/padrino/padrino-framework/issues/1556) German translations ([@Signum](http://github.com/Signum))
- FIX [#1555](http://github.com/padrino/padrino-framework/issues/1555) Fix a problem the before/after filters ([@namusyaka](http://github.com/namusyaka))
- FIX [#1550](http://github.com/padrino/padrino-framework/issues/1550) Shove LOADING/RELOADING to devel log level
- FIX [#1445](http://github.com/padrino/padrino-framework/issues/1445) Drop `PADRINO_ENV` in favour of `RACK_ENV` for further compatibility ([@dariocravero](http://github.com/dariocravero))


## 0.12.0.rc2 (January 5th 2014)

- FIX development dependency for padrino-gen ([@namusyaka](http://github.com/namusyaka))
- FIX [#1520](http://github.com/padrino/padrino-framework/issues/1520) Skip loading models for sequel migration tasks ([@ujifgc](http://github.com/ujifgc))
- FIX [#1493](http://github.com/padrino/padrino-framework/issues/1493) make admin aware of `uri_root` ([@ujifgc](http://github.com/ujifgc))
- NEW [#854](http://github.com/padrino/padrino-framework/issues/854) allow -a master to rename admin path ([@ujifgc](http://github.com/ujifgc))
- FIX Get tests passing again on rubinius ([@ujifgc](http://github.com/ujifgc))
- FIX [#1545](http://github.com/padrino/padrino-framework/issues/1545) Don't raise on `protect_from_csrf` without sessions ([@skade](http://github.com/skade))
- FIX [#1546](http://github.com/padrino/padrino-framework/issues/1546) Silence deprecation warnings for `File.exists?` ([@fj](http://github.com/fj))
- REMOVE [#1516](http://github.com/padrino/padrino-framework/issues/1516) support for TestSpec component from generator ([@ujifgc](http://github.com/ujifgc))


## 0.12.0.rc1 (December 31st 2013)

- FIX [#1421](http://github.com/padrino/padrino-framework/issues/1421) Prevent double-escaped HTML in `simple_format` ([@inkstak](http://github.com/inkstak))
- NEW [#1424](http://github.com/padrino/padrino-framework/issues/1424) Adds task generator for creating new task files ([@namusyaka](http://github.com/namusyaka))
- FIX [#1423](http://github.com/padrino/padrino-framework/issues/1423) Adds MIT license to gemspec ([@ujifgc](http://github.com/ujifgc))
- FIX [#1121](http://github.com/padrino/padrino-framework/issues/1121) Modify the encoding of `crypted_password` ([@namusyaka](http://github.com/namusyaka))
- NEW [#1432](http://github.com/padrino/padrino-framework/issues/1432) Rewritten Code Reloading ([@ujifgc](http://github.com/ujifgc))
- FIX [#1428](http://github.com/padrino/padrino-framework/issues/1428) logger constants to match stdlib ([@spariev](http://github.com/spariev))
- FIX [#775](http://github.com/padrino/padrino-framework/issues/775) track I18n locale files properly ([@ujifgc](http://github.com/ujifgc))
- FIX [#1434](http://github.com/padrino/padrino-framework/issues/1434) additional fixes for slim templates ([@minad](http://github.com/minad))
- FIX [#1431](http://github.com/padrino/padrino-framework/issues/1431) incorrect behavior when using `content_tag` with block ([@namusyaka](http://github.com/namusyaka))
- FIX [#1435](http://github.com/padrino/padrino-framework/issues/1435) broken slim templates ([@namusyaka](http://github.com/namusyaka))
- FIX AS4.1 constantize behavior compatibility ([@ujifgc](http://github.com/ujifgc))
- NEW [#1436](http://github.com/padrino/padrino-framework/issues/1436) support rails-style attribute hash of select options ([@ujifgc](http://github.com/ujifgc))
- NEW support `disabled_options` key for `select_tag` ([@ujifgc](http://github.com/ujifgc))
- FIX no longer monkeypatch colors onto string ([@ujifgc](http://github.com/ujifgc), [@nesquena](http://github.com/nesquena))
- FIX [#1442](http://github.com/padrino/padrino-framework/issues/1442) use `=` instead of `-` in slim and haml templating
- NEW [#1441](http://github.com/padrino/padrino-framework/issues/1441) cleanup template handling logic ([@ujifgc](http://github.com/ujifgc), [@namusyaka](http://github.com/namusyaka))
- FIX Cleanup file loading logic ([@ujifgc](http://github.com/ujifgc))
- FIX [#1443](http://github.com/padrino/padrino-framework/issues/1443) Don’t step over `:session_id` setting on admin apps ([@dariocravero](http://github.com/dariocravero))
- NEW Modified `padrino start` to take an extra `--options` (`-O`) parameter ([@dariocravero](http://github.com/dariocravero))
- NEW [#1018](http://github.com/padrino/padrino-framework/issues/1018) Replaces `Padrino::Cache::Store` with Moneta ([@minad](http://github.com/minad))
- NEW [#1455](http://github.com/padrino/padrino-framework/issues/1455) Steak generator written for acceptance tests ([@eturk](http://github.com/eturk), [@namusyaka](http://github.com/namusyaka))
- FIX Better error generation for forms ([@ujifgc](http://github.com/ujifgc))
- FIX html_safe in labeled group ([@ujifgc](http://github.com/ujifgc))
- NEW [#1452](http://github.com/padrino/padrino-framework/issues/1452) Allow padrino start to take handler specific options
- FIX [#1462](http://github.com/padrino/padrino-framework/issues/1462) cache content_type ([@ujifgc](http://github.com/ujifgc))
- FIX [#1466](http://github.com/padrino/padrino-framework/issues/1466) Change accepts to empty array to fix latest sinatra
- FIX [#1457](http://github.com/padrino/padrino-framework/issues/1457) Major helpers cleanup ([@ujifgc](http://github.com/ujifgc))
- NEW [#1405](http://github.com/padrino/padrino-framework/issues/1405) Params is now converted to `HashWithIndifferentAccess` ([@Ortuna](http://github.com/Ortuna))
- FIX [#1391](http://github.com/padrino/padrino-framework/issues/1391) Skip path_traversal protection ([@namusyaka](http://github.com/namusyaka))
- NEW [#1471](http://github.com/padrino/padrino-framework/issues/1471) allow configuring codes of cascade apps ([@ujifgc](http://github.com/ujifgc))
- NEW [#1477](http://github.com/padrino/padrino-framework/issues/1477) Add :as option to form_for helper ([@graudeejs](http://github.com/graudeejs))
- FIX [#1481](http://github.com/padrino/padrino-framework/issues/1481) incorrect namespace of #named_routes ([@namusyaka](http://github.com/namusyaka))
- FIX Disambiguate the behavior of `url` ([@namusyaka](http://github.com/namusyaka))
- FIX [#1461](http://github.com/padrino/padrino-framework/issues/1461) Allow to render template with layout that using other template engine ([@namusyaka](http://github.com/namusyaka))
- NEW [#767](http://github.com/padrino/padrino-framework/issues/767) introduces App.view_path and App.layout_path ([@ujifgc](http://github.com/ujifgc))
- FIX [#1488](http://github.com/padrino/padrino-framework/issues/1488) plugin generator url path to github ([@bolshakov](http://github.com/bolshakov))
- FIX [#915](http://github.com/padrino/padrino-framework/issues/915) use app.root when mounting if available ([@ujifgc](http://github.com/ujifgc))
- FIX Allow to use extension with layout method. ([@namusyaka](http://github.com/namusyaka))
- NEW [#1414](http://github.com/padrino/padrino-framework/issues/1414) drop ruby 18mode, liberate ActiveSupport
- NEW [#711](http://github.com/padrino/padrino-framework/issues/711) Verify render with block now works as expected ([@ujifgc](http://github.com/ujifgc))
- NEW [#1504](http://github.com/padrino/padrino-framework/issues/1504) allow partial with block ([@ujifgc](http://github.com/ujifgc))
- FIX [#1507](http://github.com/padrino/padrino-framework/issues/1507) patch jruby utf-8 method naming ([@ujifgc](http://github.com/ujifgc))
- FIX [#1505](http://github.com/padrino/padrino-framework/issues/1505) Remove charset from json mimetype, fix sinatra edge ([@namusyaka](http://github.com/namusyaka))
- FIX [#1513](http://github.com/padrino/padrino-framework/issues/1513) Extracting logic to methods to improve readability ([@scudelletti](http://github.com/scudelletti))
- FIX [#1517](http://github.com/padrino/padrino-framework/issues/1517) correctly set a name of mounted application ([@ujifgc](http://github.com/ujifgc))
- NEW [#1518](http://github.com/padrino/padrino-framework/issues/1518) Add :flush option to content_for ([@namusyaka](http://github.com/namusyaka))
- FIX [#1523](http://github.com/padrino/padrino-framework/issues/1523) Add Rakefile tasks to the component generator ([@tyabe](http://github.com/tyabe))
- FIX [#1526](http://github.com/padrino/padrino-framework/issues/1526) options on ActiveRecord version 3 ([@tyabe](http://github.com/tyabe))
- NEW [#1528](http://github.com/padrino/padrino-framework/issues/1528) Allow asset_folders to be configured in settings
- FIX [#1529](http://github.com/padrino/padrino-framework/issues/1529) double escaping of link urls ([@ujifgc](http://github.com/ujifgc))
- FIX [#1532](http://github.com/padrino/padrino-framework/issues/1532) allow asset_path with no kind ([@ujifgc](http://github.com/ujifgc))
- FIX [#1535](http://github.com/padrino/padrino-framework/issues/1535) rebase string urls to uri_root ([@ujifgc](http://github.com/ujifgc))
- NEW [#1539](http://github.com/padrino/padrino-framework/issues/1539) Enable :except option to :protect_from_csrf ([@namusyaka](http://github.com/namusyaka))
- FIX [#1540](http://github.com/padrino/padrino-framework/issues/1540) generator should abort if constant name already exists ([@namusyaka](http://github.com/namusyaka))
- NEW [#922](http://github.com/padrino/padrino-framework/issues/922) resolve templates relative to controller name ([@ujifgc](http://github.com/ujifgc))
- NEW [#1541](http://github.com/padrino/padrino-framework/issues/1541) Reimplement authenticity token logic ([@namusyaka](http://github.com/namusyaka))


## 0.11.4 (September 24th 2013)

- FIX [#1275](http://github.com/padrino/padrino-framework/issues/1275) Generate admin pages respecting model namespace ([@ujifgc](http://github.com/ujifgc))
- FIX [#1368](http://github.com/padrino/padrino-framework/issues/1368) French translation abbr_day_names day order ([@wazeHQ](http://github.com/wazeHQ))
- FIX [#1370](http://github.com/padrino/padrino-framework/issues/1370) support for em_mysql2 adapter in AR rake tasks ([@spariev](http://github.com/spariev))
- FIX [#1371](http://github.com/padrino/padrino-framework/issues/1371) prioritized routes doesn't work in rbx. ([@namusyaka](http://github.com/namusyaka))
- FIX [#1378](http://github.com/padrino/padrino-framework/issues/1378) broken params in routing ([@namusyaka](http://github.com/namusyaka))
- NEW [#1379](http://github.com/padrino/padrino-framework/issues/1379) Implemented csrf_meta_tags for easy csrf requests ([@dariocravero](http://github.com/dariocravero))
- FIX [#1381](http://github.com/padrino/padrino-framework/issues/1381) #compiled_router not working well. ([@namusyaka](http://github.com/namusyaka), [@ujifgc](http://github.com/ujifgc))
- FIX update Twitter Bootstrap V.3.0.0 ([@WaYdotNET](http://github.com/WaYdotNET))
- FIX [#1384](http://github.com/padrino/padrino-framework/issues/1384) mocha deprecation warnings ([@kgfullerton](http://github.com/kgfullerton))
- NEW Use tilt 1.4.0+, fixes haml & UTF-8 issue [#519](http://github.com/padrino/padrino-framework/issues/519) ([@graudeejs](http://github.com/graudeejs))
- FIX [#1394](http://github.com/padrino/padrino-framework/issues/1394) Remove code duplication in error_messages_for ([@namusyaka](http://github.com/namusyaka))
- FIX [#1395](http://github.com/padrino/padrino-framework/issues/1395) Change content_type's default value for compatibility with Sinatra ([@namusyaka](http://github.com/namusyaka))
- NEW [#1400](http://github.com/padrino/padrino-framework/issues/1400) Adds component generator for adjusting components ([@tyabe](http://github.com/tyabe))
- FIX [#1404](http://github.com/padrino/padrino-framework/issues/1404) Make it possible to pass options to submit_tag when using button_to ([@graudeejs](http://github.com/graudeejs))
- FIX [#1391](http://github.com/padrino/padrino-framework/issues/1391) Fix incorrect params when path includes encoded slash ([@namusyaka](http://github.com/namusyaka))
- DOC [#1407](http://github.com/padrino/padrino-framework/issues/1407) Major Padrino core documentation cleanup! ([@wikimatze](http://github.com/wikimatze))
- DOC [#1411](http://github.com/padrino/padrino-framework/issues/1411) Major Padrino gen documentation cleanup! ([@wikimatze](http://github.com/wikimatze))
- DOC [#1412](http://github.com/padrino/padrino-framework/issues/1412) Major Padrino helpers documentation cleanup! ([@wikimatze](http://github.com/wikimatze))
- DOC [#1413](http://github.com/padrino/padrino-framework/issues/1413) Major Padrino mailers documentation cleanup! ([@wikimatze](http://github.com/wikimatze))
- DOC [#1413](http://github.com/padrino/padrino-framework/issues/1413) Major Padrino performance documentation cleanup! ([@wikimatze](http://github.com/wikimatze))
- FIX [#1345](http://github.com/padrino/padrino-framework/issues/1345) generate admin pages respecting model namespace ([@ujifgc](http://github.com/ujifgc))
- FIX Improve file naming for generated initializers ([@ujifgc](http://github.com/ujifgc))
- NEW [#1419](http://github.com/padrino/padrino-framework/issues/1419) Adds tests to padrino-performance gem ([@wikimatze](http://github.com/wikimatze))
- FIX [#1256](http://github.com/padrino/padrino-framework/issues/1256) Don't use the ActiveSupport::SafeBuffer when using erb and Sinatra ([@namusyaka](http://github.com/namusyaka))


## 0.11.3 (July 29th 2013)

- FIX [#1297](http://github.com/padrino/padrino-framework/issues/1297) Added missing comma to spec_helper.rb generation ([@lmorduch](http://github.com/lmorduch))
- FIX [#1298](http://github.com/padrino/padrino-framework/issues/1298) DataMapper auto_migrate/auto_upgrade the default repository ([@Ortuna](http://github.com/Ortuna))
- FIX [#1276](http://github.com/padrino/padrino-framework/issues/1276) Merged range_field_tag.- templates into form_tag.- ([@Ortuna](http://github.com/Ortuna))
- FIX [#1247](http://github.com/padrino/padrino-framework/issues/1247) Ensure requiring active_record ([@udzura](http://github.com/udzura))
- FIX [#1307](http://github.com/padrino/padrino-framework/issues/1307) Lock nokogiri to 1.5.10 ([@Ortuna](http://github.com/Ortuna))
- FIX [#1307](http://github.com/padrino/padrino-framework/issues/1307) fixed haml_tag so it doesn't explode with undefined method ([@Ortuna](http://github.com/Ortuna))
- FIX [#1314](http://github.com/padrino/padrino-framework/issues/1314) Do not add authenticity token to GET form ([@Ortuna](http://github.com/Ortuna))
- FIX [#1320](http://github.com/padrino/padrino-framework/issues/1320) Some auto-detection for authenticity_token & form_tag ([@Ortuna](http://github.com/Ortuna))
- FIX [#1319](http://github.com/padrino/padrino-framework/issues/1319) "&" should be escaped to "&amp;" ([@tmtm](http://github.com/tmtm))
- NEW [#1321](http://github.com/padrino/padrino-framework/issues/1321) Added some additional HTML boolean attributes. ([@namusyaka](http://github.com/namusyaka))
- FIX [#1325](http://github.com/padrino/padrino-framework/issues/1325) Locking down active support to less than 4.0 ([@Ortuna](http://github.com/Ortuna))
- NEW [#1326](http://github.com/padrino/padrino-framework/issues/1326) Add ability for cache_key to be a block ([@Ortuna](http://github.com/Ortuna))
- FIX [#1318](http://github.com/padrino/padrino-framework/issues/1318) Make caption arg in submit-tag helper optional even when options args are supplied ([@dayflower](http://github.com/dayflower))
- FIX [#1313](http://github.com/padrino/padrino-framework/issues/1313) Implemented create and drop tasks for Sequel ([@dariocravero](http://github.com/dariocravero))
- FIX [#1250](http://github.com/padrino/padrino-framework/issues/1250) Prevent logging of health-check requests at log level over :debug ([@tyabe](http://github.com/tyabe))
- FIX [#1244](http://github.com/padrino/padrino-framework/issues/1244) mat method do not working in admin views ([@silentvick](http://github.com/silentvick))
- FIX [#1226](http://github.com/padrino/padrino-framework/issues/1226) Allow users to override admin templates on a file by file basis ([@xavriley](http://github.com/xavriley))
- FIX [#1054](http://github.com/padrino/padrino-framework/issues/1054) Implemented disabled attribute for select_tag form helper ([@dariocravero](http://github.com/dariocravero))
- FIX [#1328](http://github.com/padrino/padrino-framework/issues/1328) Added test cases for [#1188](http://github.com/padrino/padrino-framework/issues/1188) ([@Ortuna](http://github.com/Ortuna))
- FIX [#1186](http://github.com/padrino/padrino-framework/issues/1186) Reverted DataMapper's explicit String to Integer castings. ([@dariocravero](http://github.com/dariocravero))
- FIX [#1330](http://github.com/padrino/padrino-framework/issues/1330) Update Twitter Bootstrap and Font-Awesome ([@WaYdotNET](http://github.com/WaYdotNET))
- FIX [#1335](http://github.com/padrino/padrino-framework/issues/1335) Make instances of he | himself | his | him all be gender neutral. ([@didlix](http://github.com/didlix))
- FIX [#1334](http://github.com/padrino/padrino-framework/issues/1334) Error into admin section ([@WaYdotNET](http://github.com/WaYdotNET))
- FIX [#1336](http://github.com/padrino/padrino-framework/issues/1336) File.read is better than "open" ([@namusyaka](http://github.com/namusyaka))
- FIX [#1294](http://github.com/padrino/padrino-framework/issues/1294) Use :grouped_options of select_tag ([@namusyaka](http://github.com/namusyaka))
- FIX [#1337](http://github.com/padrino/padrino-framework/issues/1337) don't use block for content_tag in #select_tag ([@namusyaka](http://github.com/namusyaka))
- FIX [#751](http://github.com/padrino/padrino-framework/issues/751) introduce #absolute_url for generating absolute urls ([@ujifgc](http://github.com/ujifgc))
- FIX [#827](http://github.com/padrino/padrino-framework/issues/827) refactor padrino-cache expiration ([@ujifgc](http://github.com/ujifgc))
- FIX [#1327](http://github.com/padrino/padrino-framework/issues/1327) introduce :namespace option to abstract form builder ([@sshaw](http://github.com/sshaw))
- FIX [#1341](http://github.com/padrino/padrino-framework/issues/1341) Fix module name including dashes in project generator ([@tyabe](http://github.com/tyabe))
- FIX [#1261](http://github.com/padrino/padrino-framework/issues/1261) introduce case insensitive authentication by email ([@ujifgc](http://github.com/ujifgc))
- FIX skip padrino-cache with mongo on rbx engine ([@ujifgc](http://github.com/ujifgc))
- FIX [#1195](http://github.com/padrino/padrino-framework/issues/1195) Generator errors without git already set-up ([@ujifgc](http://github.com/ujifgc))
- FIX [#1349](http://github.com/padrino/padrino-framework/issues/1349) Redo tests for cache ([@Ortuna](http://github.com/Ortuna))
- FIX [#1353](http://github.com/padrino/padrino-framework/issues/1353) Add test cases for select_tag ([@namusyaka](http://github.com/namusyaka))
- FIX [#1354](http://github.com/padrino/padrino-framework/issues/1354) compatibility with 1.8.7 ([@namusyaka](http://github.com/namusyaka))
- FIX [#1355](http://github.com/padrino/padrino-framework/issues/1355) Automatically add multipart option to form_for if include file_field ([@tyabe](http://github.com/tyabe))
- FIX [#1356](http://github.com/padrino/padrino-framework/issues/1356) Breadcrumb#del does not work when name type is Str ([@namusyaka](http://github.com/namusyaka))
- FIX Receive multipart option ([@tyabe](http://github.com/tyabe))
- NEW [#1358](http://github.com/padrino/padrino-framework/issues/1358) Add test file for breadcrumbs. ([@namusyaka](http://github.com/namusyaka))
- FIX [#1361](http://github.com/padrino/padrino-framework/issues/1361) prioritized routes are working again ([@namusyaka](http://github.com/namusyaka))
- FIX [#1257](http://github.com/padrino/padrino-framework/issues/1257) Add a test to show use case for routing priority ([@jeffutter](http://github.com/jeffutter))
- FIX [#1365](http://github.com/padrino/padrino-framework/issues/1365) padrino rake mi:create_indexes task looks at subdirs ([@natsumesou](http://github.com/natsumesou))
- FIX [#1367](http://github.com/padrino/padrino-framework/issues/1367) bad placement output of button_to ([@namusyaka](http://github.com/namusyaka))


## 0.11.2 (May 20th 2013)

- FIX [#1232](http://github.com/padrino/padrino-framework/issues/1232) Padrino::Server - call expand_path on PID file option ([@sshaw](http://github.com/sshaw))
- FIX [#1234](http://github.com/padrino/padrino-framework/issues/1234) Create table migration should be also timestamped if configured ([@udzura](http://github.com/udzura))
- FIX [#1228](http://github.com/padrino/padrino-framework/issues/1228) Allow for block arg to StandardFormBuilder.label ([@sshaw](http://github.com/sshaw))
- FIX [#1235](http://github.com/padrino/padrino-framework/issues/1235) error of routing when using provides :any and Accept contains / ([@tyabe](http://github.com/tyabe))
- FIX [#1196](http://github.com/padrino/padrino-framework/issues/1196) Remove Ohm monkey patch and include Padrino::Ohm::Validator ([@lastcanal](http://github.com/lastcanal))
- FIX [#1236](http://github.com/padrino/padrino-framework/issues/1236) Pass our logger to rack-protection for csrf ([@dariocravero](http://github.com/dariocravero))
- FIX [#1246](http://github.com/padrino/padrino-framework/issues/1246) missing translation for Russian ([@silentvick](http://github.com/silentvick))
- NEW [#1062](http://github.com/padrino/padrino-framework/issues/1062) add configurable #app method for rack-test closes ([@achiu](http://github.com/achiu))
- FIX [#1252](http://github.com/padrino/padrino-framework/issues/1252) translations for japanese ([@tyabe](http://github.com/tyabe), [@namusyaka](http://github.com/namusyaka))
- FIX Specify full class name for migrations to fix failing migrations ([@Ortuna](http://github.com/Ortuna))
- FIX [#1279](http://github.com/padrino/padrino-framework/issues/1279) Datamapper rake task to pass arguments ([@Ortuna](http://github.com/Ortuna))
- FIX [#1281](http://github.com/padrino/padrino-framework/issues/1281) Documentation fixes to various areas ([@wikimatze](http://github.com/wikimatze))
- FIX [#1269](http://github.com/padrino/padrino-framework/issues/1269) issue with tilt version ([@ujifgc](http://github.com/ujifgc))
- FIX [#1283](http://github.com/padrino/padrino-framework/issues/1283) issue with html_safe and form builder ([@ujifgc](http://github.com/ujifgc))
- NEW [#1285](http://github.com/padrino/padrino-framework/issues/1285) Add :file option for delivering mail docs ([@wikimatze](http://github.com/wikimatze))
- FIX [#1287](http://github.com/padrino/padrino-framework/issues/1287) Lock minitest version from going to 5 ([@QOrtuna](http://github.com/QOrtuna))
- FIX [#1288](http://github.com/padrino/padrino-framework/issues/1288) Http router fix unicode ([@Ortuna](http://github.com/Ortuna))
- FIX [#698](http://github.com/padrino/padrino-framework/issues/698) Sqlite adding an extra "/" to the connection string for windows ([@dariocravero](http://github.com/dariocravero))


## 0.11.1 (April 7th 2013)

- NEW Ability to set migration file format to use incrementing numbers or timestamps ([@jacob](http://github.com/jacob)-s-son, [@hooopo](http://github.com/hooopo))
- FIX [#1174](http://github.com/padrino/padrino-framework/issues/1174) slim 2.0 Backward incompatible syntax change ([@WaYdotNET](http://github.com/WaYdotNET))
- FIX [#1086](http://github.com/padrino/padrino-framework/issues/1086) Refactor reloader for cleaner structure ([@Ortuna](http://github.com/Ortuna))
- FIX [#1178](http://github.com/padrino/padrino-framework/issues/1178) Indent controller actions properly ([@skade](http://github.com/skade))
- FIX [#1180](http://github.com/padrino/padrino-framework/issues/1180) Fix valid http verbs in http_router ([@kenkeiter](http://github.com/kenkeiter), [@dariocravero](http://github.com/dariocravero))
- FIX [#1182](http://github.com/padrino/padrino-framework/issues/1182) Format ar migrate better ([@chiastolite](http://github.com/chiastolite))
- FIX [#1179](http://github.com/padrino/padrino-framework/issues/1179) Accidental appended extensions for js urls ([@nesquena](http://github.com/nesquena))
- FIX [#1183](http://github.com/padrino/padrino-framework/issues/1183) Mark escaped text as html_safe ([@nesquena](http://github.com/nesquena))
- FIX [#1184](http://github.com/padrino/padrino-framework/issues/1184) Use count instead of size for errors ([@nesquena](http://github.com/nesquena))
- FIX [#1185](http://github.com/padrino/padrino-framework/issues/1185) Adds lib as a load_path for rake tasks ([@nesquena](http://github.com/nesquena))
- FIX [#1177](http://github.com/padrino/padrino-framework/issues/1177) Fix very strange bug with form_for and capture_html ([@ujifgc](http://github.com/ujifgc), [@nesquena](http://github.com/nesquena))
- FIX have plugin generator respect root option ([@achiu](http://github.com/achiu))
- FIX [#1194](http://github.com/padrino/padrino-framework/issues/1194) simple_format should be marked as html_safe ([@nesquena](http://github.com/nesquena))
- FIX Escape text before simple_format ([@nesquena](http://github.com/nesquena))
- FIX [#1197](http://github.com/padrino/padrino-framework/issues/1197) "bootstrap.min" path of production environment ([@tyabe](http://github.com/tyabe))
- FIX [#1201](http://github.com/padrino/padrino-framework/issues/1201) Only add database tasks to Rakefile if ORM is anything other than :none ([@dariocravero](http://github.com/dariocravero))
- NEW [#1209](http://github.com/padrino/padrino-framework/issues/1209) Added layout option for controllers ([@Ortuna](http://github.com/Ortuna))
- FIX [#1212](http://github.com/padrino/padrino-framework/issues/1212) fix generators for projects using shoulda and rr with Test::Unit ([@sshaw](http://github.com/sshaw))
- FIX [#1213](http://github.com/padrino/padrino-framework/issues/1213) fix flash_tag() with multiple attributes ([@tmtm](http://github.com/tmtm))
- FIX [#1215](http://github.com/padrino/padrino-framework/issues/1215) Update zh_cn.yml ([@wayshall](http://github.com/wayshall), hfl)
- FIX [#1216](http://github.com/padrino/padrino-framework/issues/1216) Improved german translations ([@skade](http://github.com/skade))
- FIX [#1221](http://github.com/padrino/padrino-framework/issues/1221) fixes an issue with a gemified apps name being capitalized ([@21purple](http://github.com/21purple))
- FIX [#1205](http://github.com/padrino/padrino-framework/issues/1205) Allow Regexp routes to use :provides option ([@shipstar](http://github.com/shipstar))
- FIX [#1224](http://github.com/padrino/padrino-framework/issues/1224) mark html_safe content safe after being escaped ([@nesquena](http://github.com/nesquena))
- FIX [#1211](http://github.com/padrino/padrino-framework/issues/1211) load I18n tasks all the time ([@nesquena](http://github.com/nesquena))


## 0.11.0 (March 21st 2013)

- NEW [#923](http://github.com/padrino/padrino-framework/issues/923) Total redesign of admin panel with bootstrap and jquery, custom error pages
  Big thanks to the huge effort from ([@WaYdotNET](http://github.com/WaYdotNET), [@DAddYE](http://github.com/DAddYE), [@dariocravero](http://github.com/dariocravero), [@ujifgc](http://github.com/ujifgc), [@tyabe](http://github.com/tyabe))!
- FIX [#1135](http://github.com/padrino/padrino-framework/issues/1135) Fix namespaced generators for app ([@tyabe](http://github.com/tyabe))
- FIX [#1139](http://github.com/padrino/padrino-framework/issues/1139) Escape ampersands in mail_to helpers ([@nybblr](http://github.com/nybblr))
- FIX [#821](http://github.com/padrino/padrino-framework/issues/821) Added a cache parser with a default now to Plain. ([@daddye](http://github.com/daddye))
- FIX [#1129](http://github.com/padrino/padrino-framework/issues/1129) use Padrino.root for apps.rb
- FIX [#1125](http://github.com/padrino/padrino-framework/issues/1125) Eagerly load libs if needed for tasks
- FIX [#1111](http://github.com/padrino/padrino-framework/issues/1111) route arity ([@daddye](http://github.com/daddye))
- FIX [#1090](http://github.com/padrino/padrino-framework/issues/1090) Don't calculate asset timestamp using uri_root_path ([@nesquena](http://github.com/nesquena))
- NEW Upgrades Sinatra support to 1.4.1 ([@nesquena](http://github.com/nesquena), [@daddye](http://github.com/daddye))
- NEW Upgrade to latest http_router 0.11 ([@daddye](http://github.com/daddye))
- NEW Load rake tasks manually but fallback to automatic for now ([@skade](http://github.com/skade))
- FIX cleanup and refactoring of documentation ([@wikimatze](http://github.com/wikimatze), [@fnordfish](http://github.com/fnordfish))
- FIX Run 'bundle' rather than 'bundle install' on generate ([@wikimatze](http://github.com/wikimatze))
- FIX Cleanup admin documentation ([@danieltahara](http://github.com/danieltahara))
- FIX padrino cache tests to not execute when cache server is not available ([@bash0C7](http://github.com/bash0C7))
- SEC [#1083](http://github.com/padrino/padrino-framework/issues/1083) Bump mail version dependency to CVE-2012-2139 and CVE-2012-2140. ([@nesquena](http://github.com/nesquena))
- NEW Alias orm tasks to db namespace ([@postmodern](http://github.com/postmodern))
- FIX [#1090](http://github.com/padrino/padrino-framework/issues/1090) Patch asset_timestamp to respect public_folder setting ([@AtoxIO](http://github.com/AtoxIO))
- FIX [#1045](http://github.com/padrino/padrino-framework/issues/1045) Load the environment only when needed in rake-Tasks ([@skade](http://github.com/skade))
- NEW [#1031](http://github.com/padrino/padrino-framework/issues/1031) Render using SafeBuffer for XSS protection ([@skade](http://github.com/skade))
- NEW [#1007](http://github.com/padrino/padrino-framework/issues/1007) Apps can now be shipped as gems ([@skade](http://github.com/skade))
- FIX [#966](http://github.com/padrino/padrino-framework/issues/966)  Padrino:Reload.lock! tries to split java packages ([@daddye](http://github.com/daddye))
- REM [#1063](http://github.com/padrino/padrino-framework/issues/1063) Remove core JSON rendering in favor of sinatra-contrib ([@Ortuna](http://github.com/Ortuna))
- NEW [#1027](http://github.com/padrino/padrino-framework/issues/1027) Padrino Performance for memory profiling and benchmarking ([@skade](http://github.com/skade), [@dariocravero](http://github.com/dariocravero))
- NEW [#1011](http://github.com/padrino/padrino-framework/issues/1011) Nest apps within the project module ([@achiu](http://github.com/achiu), [@tyabe](http://github.com/tyabe))
- NEW [#904](http://github.com/padrino/padrino-framework/issues/904) Adds padrino-flash as core library ([@lenzcom](http://github.com/lenzcom))
- FIX [#912](http://github.com/padrino/padrino-framework/issues/912) Use default layout when layout is set to true ([@dcu](http://github.com/dcu))
- NEW [#927](http://github.com/padrino/padrino-framework/issues/927) Add CLI runner for executing code ([@tyabe](http://github.com/tyabe))
- FIX [#934](http://github.com/padrino/padrino-framework/issues/934) Rake routes when routes have regexes ([@tyabe](http://github.com/tyabe))
- FIX [#949](http://github.com/padrino/padrino-framework/issues/949) 404 handling in later sinatra versions ([@dayflower](http://github.com/dayflower))
- FIX [#818](http://github.com/padrino/padrino-framework/issues/818) Filter and exceptions was running twice on error ([@ujifgc](http://github.com/ujifgc))
- FIX [#812](http://github.com/padrino/padrino-framework/issues/812) Patch exception handling within filters ([@ujifgc](http://github.com/ujifgc))
- FIX [#771](http://github.com/padrino/padrino-framework/issues/771) Padrino.configure_apps now supports multiple blocks ([@ujifgc](http://github.com/ujifgc))
- NEW [#843](http://github.com/padrino/padrino-framework/issues/843) Request route now has access to the associated action ([@ujifgc](http://github.com/ujifgc))
- NEW [#1097](http://github.com/padrino/padrino-framework/issues/1097) Request route now has access to the parent ([@dariocravero](http://github.com/dariocravero))
- FIX French translation typos ([@Fiaxhs](http://github.com/Fiaxhs))
- FIX Optimize the reloader and objectspace traversal ([@dcu](http://github.com/dcu))
- FIX Failing jruby compatibility issue with reloading ([@udzura](http://github.com/udzura))
- NEW [#881](http://github.com/padrino/padrino-framework/issues/881) Component support for Mongoid 3 ([@WaYdotNET](http://github.com/WaYdotNET))
- NEW [#967](http://github.com/padrino/padrino-framework/issues/967) Mongoid 3 compatible rake tasks ([@dayflower](http://github.com/dayflower))
- NEW [#907](http://github.com/padrino/padrino-framework/issues/907) Puma server support ([@dariocravero](http://github.com/dariocravero))
- FIX Loads dm-types when enabling datamapper component ([@postmodern](http://github.com/postmodern))
- FIX [#911](http://github.com/padrino/padrino-framework/issues/911) Enable haml ugly syntax by default in production ([@dcu](http://github.com/dcu))
- FIX Adds support for later versions of ActiveRecord ([@DAddYE](http://github.com/DAddYE))
- FIX Less requires therubyracer gem ([@dariocravero](http://github.com/dariocravero))
- FIX Lock mysql gem to 2.8.1 since 2.9 fails ([@udzura](http://github.com/udzura), [@dariocravero](http://github.com/dariocravero))
- FIX Lazy load mailer for 20% padrino bootup performance increase ([@ujifgc](http://github.com/ujifgc))
- FIX [#1071](http://github.com/padrino/padrino-framework/issues/1071) Refactor mailer codebase to DRY up ([@Ortuna](http://github.com/Ortuna))
- FIX Padrino.logger thread-safety issues ([@sgonyea](http://github.com/sgonyea))
- NEW Add colorize_logging option for logger ([@tyabe](http://github.com/tyabe))
- FIX [#918](http://github.com/padrino/padrino-framework/issues/918) Display seconds instead of ms in logger ([@muxcmux](http://github.com/muxcmux))
- FIX [#910](http://github.com/padrino/padrino-framework/issues/910) Write file data as binary in cache ([@ejholmes](http://github.com/ejholmes))
- NEW [#947](http://github.com/padrino/padrino-framework/issues/947) Support symbols as keys when expiring cache ([@dariocravero](http://github.com/dariocravero))
- FIX [#973](http://github.com/padrino/padrino-framework/issues/973) Refuse to cache integers, convert to a string ([@ujifgc](http://github.com/ujifgc))
- NEW Adds breadcrumb view helpers ([@WaYdotNET](http://github.com/WaYdotNET))
- NEW support for ohm persistence in admin ([@ujifgc](http://github.com/ujifgc))
- FIX [#873](http://github.com/padrino/padrino-framework/issues/873) Get the first key passed for expire for admin ([@gugat](http://github.com/gugat))
- FIX [#876](http://github.com/padrino/padrino-framework/issues/876) Model output in erb templates for admin ([@sleepingstu](http://github.com/sleepingstu))
- FIX [#871](http://github.com/padrino/padrino-framework/issues/871) Halt on 404 when no record found for admin (kot-begemot)
- FIX [#1013](http://github.com/padrino/padrino-framework/issues/1013) Admin generator can now be destroyed with flag
- NEW [#988](http://github.com/padrino/padrino-framework/issues/988) Support for HTML5 multiple file uploads ([@hooktstudios](http://github.com/hooktstudios))
- NEW [#27](http://github.com/padrino/padrino-framework/issues/27) Adds check_box_group and radio_button_group ([@ujifgc](http://github.com/ujifgc))
- FIX [#1046](http://github.com/padrino/padrino-framework/issues/1046) Broken js_escape_html helper to properly escape ([@hooopo](http://github.com/hooopo))
- FIX [#1077](http://github.com/padrino/padrino-framework/issues/1077) Refactor nested form code in helpers ([@Ortuna](http://github.com/Ortuna))
- FIX [#924](http://github.com/padrino/padrino-framework/issues/924) Generate project name to handle underscores ([@achiu](http://github.com/achiu))
- FIX [#1067](http://github.com/padrino/padrino-framework/issues/1067) Execute the mysql command with separate args ([@postmodern](http://github.com/postmodern))
- SEC [#1058](http://github.com/padrino/padrino-framework/issues/1058) Switch to https for rubygems source in Gemfile ([@tyabe](http://github.com/tyabe))
- FIX [#772](http://github.com/padrino/padrino-framework/issues/772) Controller path when maps is in controller options ([@ujifgc](http://github.com/ujifgc))
- NEW [#925](http://github.com/padrino/padrino-framework/issues/925) Add explicit Rakefile on project generation by default ([@achiu](http://github.com/achiu))
- FIX [#892](http://github.com/padrino/padrino-framework/issues/892) Show plugin list if no arguments passed to generator ([@achiu](http://github.com/achiu))
- FIX [#1107](http://github.com/padrino/padrino-framework/issues/1107) Defaulted all ORMs that used the mysql gem ([@dariocravero](http://github.com/dariocravero))
- FIX [#1109](http://github.com/padrino/padrino-framework/issues/1109) Move rake initialization into CLI to avoid double loading ([@skade](http://github.com/skade))
- NEW [#1100](http://github.com/padrino/padrino-framework/issues/1100) Add csrf token handling with csrf_token_field helpers ([@skade](http://github.com/skade), [@dariocravero](http://github.com/dariocravero))


## 0.10.7 (June 20th 2012)

- FIX [#777](http://github.com/padrino/padrino-framework/issues/777) Improve slim template block capturing
- FIX [#807](http://github.com/padrino/padrino-framework/issues/807) Fixes reloader class name resolution
- NEW [#813](http://github.com/padrino/padrino-framework/issues/813) Added support for activerecord-jdbcmysql-adapter ([@rameshpy](http://github.com/rameshpy))
- FIX [#814](http://github.com/padrino/padrino-framework/issues/814) Fix options_for_select result in a corner case ([@whitequark](http://github.com/whitequark))
- FIX [#828](http://github.com/padrino/padrino-framework/issues/828) Remove explicit tlsmail dependency ([@trevor](http://github.com/trevor))
- FIX [#829](http://github.com/padrino/padrino-framework/issues/829) Adding an options attribute to ProjectModule ([@simonc](http://github.com/simonc))
- FIX [#780](http://github.com/padrino/padrino-framework/issues/780) Respect user defined model name for admin ([@joelcuevas](http://github.com/joelcuevas))
- FIX [#841](http://github.com/padrino/padrino-framework/issues/841) Patched to fix rake use in padrino templates ([@jasonm23](http://github.com/jasonm23))
- NEW [#836](http://github.com/padrino/padrino-framework/issues/836) Adds a catch all method to the redis cache
- FIX [#856](http://github.com/padrino/padrino-framework/issues/856) Make mysql2 alias of mysql when DataMapper is selected
- FIX [#858](http://github.com/padrino/padrino-framework/issues/858) Add require ActiveSupport::TimeWithZone class for helpers
- FIX HTML Change boolean helper attributes to conform to xhtml strict
- FIX [#855](http://github.com/padrino/padrino-framework/issues/855) Fix error_message_on for empty array ([@sshaw](http://github.com/sshaw))
- NEW [#853](http://github.com/padrino/padrino-framework/issues/853) Adds Swedish localization support ([@Lejdborg](http://github.com/Lejdborg))
- NEW [#853](http://github.com/padrino/padrino-framework/issues/853) Adds Romanian localization support ([@relu](http://github.com/relu))
- FIX [#850](http://github.com/padrino/padrino-framework/issues/850) Prevent JRuby reloading bug ([@dn2k](http://github.com/dn2k))
- FIX [#846](http://github.com/padrino/padrino-framework/issues/846) Fix admin generator to understand model_name ([@fnordfish](http://github.com/fnordfish))
- NEW [#845](http://github.com/padrino/padrino-framework/issues/845) Add CLI shortcut with just 'c' ([@joslinm](http://github.com/joslinm))


## 0.10.6

- FIX [#786](http://github.com/padrino/padrino-framework/issues/786) reloader issues with routes
- FIX Lumberjack Logging Compatibility
- FIX Write cached css into public stylesheets path ([@fnordfish](http://github.com/fnordfish))
- FIX Fixes error with less component ([@fnordfish](http://github.com/fnordfish))
- NEW [#787](http://github.com/padrino/padrino-framework/issues/787) Support Nested Data Attributes in Tags ([@agios](http://github.com/agios))
- FIX [#760](http://github.com/padrino/padrino-framework/issues/760) better html5 helper support ([@Cirex](http://github.com/Cirex))
- NEW [#764](http://github.com/padrino/padrino-framework/issues/764) adds a few form inputs in helpers ([@Cirex](http://github.com/Cirex))
- FIX [#680](http://github.com/padrino/padrino-framework/issues/680) upgrade to activesupport and activerecord 3.2
- FIX Adds support for minirecord generators
- FIX Upgrade to latest datamapper
- FIX [#702](http://github.com/padrino/padrino-framework/issues/702) Change to new sequel migration syntax ([@funny](http://github.com/funny)-falcon)
- FIX [#705](http://github.com/padrino/padrino-framework/issues/705) incorrect require when using AR with pg gem ([@udzura](http://github.com/udzura))
- FIX [#724](http://github.com/padrino/padrino-framework/issues/724) Use binread for file cache on 1.9.X
- FIX [#729](http://github.com/padrino/padrino-framework/issues/729) Added setting to change model name for admin
- NEW Adds regexp route generation support ([@joshbuddy](http://github.com/joshbuddy))
- FIX [#720](http://github.com/padrino/padrino-framework/issues/720) Set PADRINO_LOG_LEVEL constant by default ([@marcosdsanchez](http://github.com/marcosdsanchez))
- FIX [#725](http://github.com/padrino/padrino-framework/issues/725) app.app_name is not set error in padrino-cache ([@modeverv](http://github.com/modeverv))
- FIX [#733](http://github.com/padrino/padrino-framework/issues/733) Mailer generator now handles hyphens
- FIX Replace Sinatra quote with Godfather movie reference on server exit ([@danishkhan](http://github.com/danishkhan))
- FIX [#743](http://github.com/padrino/padrino-framework/issues/743) Correctly parse arguments to padrino binary
- FIX [#745](http://github.com/padrino/padrino-framework/issues/745) Cache now stores response and content_type ([@sumskyi](http://github.com/sumskyi))
- FIX [#676](http://github.com/padrino/padrino-framework/issues/676) Adds support for trinidad web server on jruby
- FIX [#736](http://github.com/padrino/padrino-framework/issues/736) Logger refactoring to support other loggers ([@skade](http://github.com/skade))
- NEW Adds alias 'escape_javascript' for 'js_escape_html' method
- FIX Asset files from absolute paths should not have asset stamps associated
- FIX Updated stylesheets initializers to respect spaces.


## 0.10.5

- FIX [#701](http://github.com/padrino/padrino-framework/issues/701) make static script assets work again for generator


## 0.10.4

- FIX [#690](http://github.com/padrino/padrino-framework/issues/690) adds proper require for sinatra-flash in Gemfile
- FIX [#691](http://github.com/padrino/padrino-framework/issues/691) fixes logger error when rendering templates
- FIX [#692](http://github.com/padrino/padrino-framework/issues/692) ensure :static_cache_control is properly applied
- FIX [#689](http://github.com/padrino/padrino-framework/issues/689) status messages to common padrino logger ([@udzura](http://github.com/udzura))
- FIX logger issue when displaying cache logs
- FIX [#694](http://github.com/padrino/padrino-framework/issues/694) issue with minitest generator ([@runa](http://github.com/runa))
- NEW Silence YARD undocumented warnings in padrino gems


## 0.10.3

- NEW Upgrade to recently released Sinatra 1.3
- FIX [#679](http://github.com/padrino/padrino-framework/issues/679) replaces rack-flash with sinatra-flash
- NEW [#667](http://github.com/padrino/padrino-framework/issues/667) Adds mintest testing component to generator
- FIX [#634](http://github.com/padrino/padrino-framework/issues/634) Removes less gem dependency for less gen
- NEW [#662](http://github.com/padrino/padrino-framework/issues/662) create "content_for?" helper ([@mlightner](http://github.com/mlightner))
- FIX [#669](http://github.com/padrino/padrino-framework/issues/669) Fixes YAML locale files to be psych compliant ([@skade](http://github.com/skade))
- NEW Fixes logger to be much cleaner with better formatting
- FIX issue with generator runner for https templates ([@xavierRiley](http://github.com/xavierRiley))
- FIX [#669](http://github.com/padrino/padrino-framework/issues/669) YML locale files are now psych compliant
- NEW [#658](http://github.com/padrino/padrino-framework/issues/658) removes shoulda and switch to minitest (with aliases)
- NEW [#657](http://github.com/padrino/padrino-framework/issues/657) Converts RDoc to YARD and improve all docs
- FIX Document example of Padrino::Admin::AccessControl ([@benjaminoakes](http://github.com/benjaminoakes))
- NEW Adds Latvian locale translation ([@ugisozols](http://github.com/ugisozols))
- FIX [#686](http://github.com/padrino/padrino-framework/issues/686) Halt status with code responds as expected


## 0.10.2

- NEW support for TravisCI with build configurations
- NEW support of mysql2 when using sequel as adapter ([@rafaelss](http://github.com/rafaelss))
- NEW [#636](http://github.com/padrino/padrino-framework/issues/636) print which views are called in log when in development mode ([@minikomi](http://github.com/minikomi))
- NEW support of ActiveRecord 3.1 and ActiveSupport 3.1
- NEW yard doc available {here}[http://www.padrinorb.com/api/index.html]
- FIX [#624](http://github.com/padrino/padrino-framework/issues/624) potential issue with libxml-ruby ([@farcaller](http://github.com/farcaller))
- FIX [#618](http://github.com/padrino/padrino-framework/issues/618) allow to map routes using "index" reserved word
- FIX [#633](http://github.com/padrino/padrino-framework/issues/633) RACK_ENV now is respected also using bundled server
- FIX rendering error for partials when they start with a forward slash ([@philly](http://github.com/philly)-mac)
- FIX all our sources files now are vim friendly
- FIX preserve the original options when resolving a template ([@Xylakant](http://github.com/Xylakant))
- FIX bad path in shoulda test generator ([@futurechimp](http://github.com/futurechimp))
- FIX require path in model tests to generate correctly if specifing app
- FIX [#647](http://github.com/padrino/padrino-framework/issues/647) allow to override view errors
- FIX [#646](http://github.com/padrino/padrino-framework/issues/646) compat with ActiveRecord >3.0.10
- FIX [#381](http://github.com/padrino/padrino-framework/issues/381) escape "<> from tag helpers values
- FIX [#639](http://github.com/padrino/padrino-framework/issues/639) prevent XSS from admin login ([@eikes](http://github.com/eikes))
- FIX [#620](http://github.com/padrino/padrino-framework/issues/620) render :json => obj now set content_type to 'application/json;charset=utf-8'
- FIX [#575](http://github.com/padrino/padrino-framework/issues/575) when using html parts now mailer content type is 'multipart/alternative'
- FIX [#631](http://github.com/padrino/padrino-framework/issues/631) reloading futzing with the query parameters (Hollin Wilkins & Dave Willett @ TrueCar in San Francisco)
- FIX recognize_path now is compatible with http_router > 0.10


## 0.10.1

- Added a Mongo store for padrino-cache [Thanks to aliem]
- Adds restful support for parent controller declaration
- Before filters are called regardless of matching
- Fix env['padrino.instance'] where create a loop and is too long to show in Padrino::ShowExceptions.
- Compat with Slim 1.0, Compat with Ruby 1.9.3. FIX [#596](http://github.com/padrino/padrino-framework/issues/596)
- Translation fixes for IT, CS, DE, NL, and more with locale tests
- Fixes for FR, CN and RU locales [Thanks to TweeKane]
- Compatibility with Bundler > 1.0 in Gemfile
- Admin generator properly destroys access control on removal
- Fixes admin generation when used with namespaced models
- Allow logger to be configured before load [Thanks to skade]
- Fix an error message [Thanks mariozig]
- Fix doc bug in logger [Thanks Xylakant]
- Adds host parameter to DM Postgresql Adapter [Thanks to Aigeruth]
- Cleanup models folder in apps that is no longer used by default


## 0.10.0

- Fix `padrino s` shortcut to accept options
- Fix Padrino::Application#run! (now correctly accepts options)
- Fix Padrino::Server (now has correct defaults options)
- Fix Padrino::Reloader with strange constants or paths [#565](http://github.com/padrino/padrino-framework/issues/565)
- Fix Padrino::Reloader reloading also $LOADED_FEATURES deps
- Fix Double loading of boot.rb in rake tasks. [#560](http://github.com/padrino/padrino-framework/issues/560)
- Fix an issue with haml rendering on rubinius
- Fix our tests to meets ruby < 1.9 needs
- Fix issue [#556](http://github.com/padrino/padrino-framework/issues/556) now we resolve correctly prerequisites of your app
- Enhancement for [#556](http://github.com/padrino/padrino-framework/issues/556) now is possible to add custom prerequisites to our app
- Change move Padrino.current_controller in public apis
- Enhancement, now Padrino::Reloader works without ActiveSupport::Dependency or with it disabled [#567](http://github.com/padrino/padrino-framework/issues/567) [Thanks Bernerdschaefer]
- Cleanup padrino-core dependencies now we have less less ActiveSupport dependencies, we are very very thin finally!
- Fix bundler gem dependency mismatch [#553](http://github.com/padrino/padrino-framework/issues/553)
- Fix command issue with padrino g or padrino gen on rubinius [#531](http://github.com/padrino/padrino-framework/issues/531)
- Fix issue [#562](http://github.com/padrino/padrino-framework/issues/562), now is no more necessary "bundle exec anything"
- Remove Padrino::Rendering from autoloading (manually must be loaded)
- New Enhancement to controller filters
- Add option to specify model generation of Account from padrino-admin
- Generates models by default into `/models`
- Controllers accept :conditions option [Thanks to Bernerdschaefer]
- Added Hungarian translation [Thanks to Kormány Zsolt]
- Added Riak support through Ripple
- Updated couchrest_model dependency to ~>1.1.0
- Fix issue [#571](http://github.com/padrino/padrino-framework/issues/571), don't handle Gemfile if we are outside a Padrino project
- Fix issue [#569](http://github.com/padrino/padrino-framework/issues/569), prevent a little problem with DM and string length
- Require only individual gems of DataMapper to use a thin environment and prevent to load old gems like json 1.4
- Support for priority route ordering in controllers


## 0.9.29

- Cleanup SupportLite
- Cleanup Reloader
- Cleanup Padrino::Application
- Cleanup Gemfile generation
- Cleanup Reloader
- Cleanup Application Server
- Improved Reloader
- Decoupled Reloader, Loader, Application
- Fixed Reloader in some extreme scenarios
- Make methods of Padrino::Application that act as Padrino Core
- Fixed error logging
- Added Padrino.clear, useful to clean a Padrino Enviroment
- Improved granularity of our reloader locking and prevent reloading of unnecessary deps
- Use Sequel::Model.db= instead of DB= because is more simple change on the fly connections
- Added compatibility with CouchRest::Model 1.1+
- Cleanup support lite and improved compatiblity with jruby
- Expose Padrino::Application.load_paths
- Added a new method to load custom app dependencies
- Added a new format helper 'truncate_words' [Thanks cearls!]
- Fixes support for local vars passing in render
- Rake 0.9 and 0.8.7 compat
- Use Rack::Flash as Rails do
- Fix a deprecation with model_name.human


## 0.9.28

- Fixed couchrest Account Model
- Generate SystemTimer for Mongoid only if Ruby 1.8 [Thanks to RoryO]
- Generate SystemTimer for Mongomapper only if Ruby 1.8
- Add `padrino s` as alias for `padrino start`
- Fixed Gemfile for couchrest
- Updated Gemfile for mongoid
- Fix a possible loop in require_dependencies
- Added padrino rake gen useful to create a Rakefile to handle for example with heroku


## 0.9.27

- Use sass gem, because now is separated from haml
- Escape regex in our reloader
- Use CouchRest::Model instead of CouchRest::ExtendedDocument [Thanks Burgestrand!]
- Fixes issues with offline generation of js (from padrino-static)
- Fixes YAML parsing bug by using syck
- Use sinatra 1.2.5
- Make logger sinatra 1.3 compat
- Use new sqlite3 gem in generated projects
- Removed padrino_logging and use instead simple logging to avoid conflicts
- By default use logging only on development
- Uses raise_errors, dump_errors, show_exceptions as Sinatra::Base do
- Refactored Padrino::Application
- Added a global configuration in config/apps.rb used by each Padrino Applicaitons
- Moved session_secret in global configuration project
- Use SecureRandom to generate session secret
- Support 'partial' in Sinatra with explicit engine
- Added recognize_path method ex: recognize_path(request.referrer) => [:controller_action, { :id => 1 }]
- Added current_path method ex: current_path(:merge => :param) => "/current/1234/merge/param"
- Support for jruby-memcache-client/memcache-client
- Added MongoMapper task for drop database


## 0.9.26

- Padrino::Logger compatible with Rack::CommonLogger
- Added session_path and ability to use custom Rack::Session::Cookie options
- Fixed dependency loader
- Fixed mounting sub-apps
- Fixed shared sessions


## 0.9.25

- Fixes to allow flexible libraries in padrino-cache
- Allow select tag to take a range of options [Thanks activestylus]
- Allow grouped options in a select_tag [Thanks activestylus]
- Use MongoMapper official gem
- Fixes ERBHandler type detection
- Fixes Routes with globs that when something is after the glob i.e. get :show, :map => '/pictures/*\path.html'
- Updated http_router to ~> 0.7.0
- Completed Padrino Cache Doc [Thanks to Onethirtyfive]
- Added a global Padrino.cache option
- Padrino-Cache now is able to store ruby objects
- Fix expire_in on redis store in Padrino Cache
- Added Ajax Helpers
- Use https://github.com/padrino/padrino-static for download js and ujs adapters (if no internet connection use a local copy)
- Added session_secret task generator and as default in our app templates
- Correctly work with nested parameters sent to url [Thanks to Funny-falcon]
- Fix ajax request detection for dataType: 'application/javascript'
- Removed lib from excluded list of our reloader
- Added in our logs app name space for urls and layouts
- Preserve spaces for text_area using admin/haml
- Prevent using missing rendering engines on admin allowing user to use a different way
- Fixed AbstractFormBuilder class scope name [Thanks to Funny-falcon]
- Changed layout of our logger
- Logs for cache GET and SET
- Caching instructions in main app template
- Fixes NotFound Sinatra Errors
- Require correct rspec/exceptions in cucumber.
- Stylesheet_link_tag and javascript_include_tag should allow array inputs for sources (instead of argument array)
- More space for edit/delete actions in the Admin Section
- Added a nice confirm dialog to prevent mistakes in the Admin Section
- Added the correct DELETE method to the logout in the Admin Section
- Added setting log_static setting to Padrino.logger [Thanks to railsjedi]
- Added stylesheet_link_tag and javascript_include_tag to allow array input for sources [Thanks to railsjedi]
- Added ruby-debug19 to Gemfile [Thanks to railsjedi]
- Allow simple_format to use a custom tag instead the only p tag
- Fix collision with AS load_dependency
- Fix File Store when cache dir is deleted after init
- Added empty rows and cols to text_area tag to be w3c
- Update Sinatra to 1.2.3 and HttpRouter to 0.6.9
- Added cache_key inside route for a simple/fast expiring caching
- Updated plugin git command to use Grit instead
- Removed ./bundle/environment stuff
- Rubinius compat [Thx to Rakaur]
- Fixed setting custom views path
- Removed deprecated dom helpers
- Completed support for Slim
- Adds Slim admin support
- Do not enforce rack sessions for Rack:Flash
- Now erubis is the standard for the erb templates like in tilt/sinatra
- Fix stop daemonized padrino from non standard path
- Fix app path when generating sub-applications
- Use sass gem because now is separated from haml
- Allow combining different templates (ex: render a partial built with haml from a slim/erubis view)
- Use sessions for uri_root
- Fix padrino admin page title


## 0.9.24

- Delayed


## 0.9.23

- Allow 406 on (.format) urls via a flag
- Adds method_override flag to Padrino by default
- Routing compatibility with the Sinatra 1.2 url method
- Padrino now requires to ~> sinatra 1.2.0


## 0.9.22

- Fix no more password encryption when password is blank
- Fix mongoid dependency
- Fix admin mongomapper template to encrypt password
- Allow disabling of Padrino::Logger via :padrino_logging
- Use Sinatra::Base instead of Sinatra::Application
- Added Japanese Translations [Thanks to udzura]
- Set status to 406 on non-provided ACCEPTS
- Returns first provided mime-type on ACCEPT = */*
- Assume */- if no ACCEPT header is given


## 0.9.21

- Support of regex captures in routes
- Fixed routing issues with :index
- Creation of empty directories for images/javascripts/stylesheets/tmp
- Updated mongomapper adapter to use rails3 branch
- Removed snowtag
- Updated datamapper gen to store correctly passwords
- Added Slim template to Padrino Admin [Thanks to Matthew Winter]
- Added Traditional Chinese support(zh_tw) [Thanks to ayamomiji]
- Include padrino-cache gem as part of standard install
- Added Rake Task for Mongoid
- Ensure project name are valid
- Removed erubis support
- Refactored the output handlers for helpers
- Improves select_tag 'selected' option
- Basic nested object form support
- Updated mongoid adapter to use 2.0.0.beta.20
- Remove legacy bundler setup from config/boot.rb
- Change to routes to fix param assembly order
- Fixed optional parameter routing test
- Fixes error_message_on object name bug [Thanks craigp]
- Removed default index page
- Fetch Layout Path in app/views and app/views/layouts with :layout => :foo
- Fixes issue with layout and format resolution in render
- Added Simplified Chinese support(zh_cn)


## 0.9.20

- Removed Rspec1 generator
- Upgraded router to 0.5.0
- Allow adding middlewares in front of the router
- Fixed DataMapper Admin Adapter and Encrypt Passwords
- Changed default ActiveRecord config with :reconnect => true
- Added basic erubis support to the admin
- Require only require 'spec_helper' in rspec tests
- Added padrino-cache to our padrino meta-gem
- Removed mount_core
- Fix camelized model names in model generation
- Added slim renderer component
- Now the content format can be set explicitly in a param [Thanks to Qzio]
- Fixed I18n load_path [Thanks to Pirj]
- Updated column proprieties for DataMapper
- Now Mounter accept namespaced applications [Thanks to Mcmire]
- Updated ar:translate to be more compat with AS 3.+
- remove strict_format in layouts to work with Sinatra as a standalone
- Change Padrino Admin to generate model in own app, not default generated app.
- Sinatra 1.1.2 Compat
- Test compatibility with Sinatra 1.1.0 and 1.1.2
- Fixed spaces in asset_path


## 0.9.19

- Sinatra 1.1 compat
- Fixed destroy admin/app/page [Thanks to Sob]
- Fixed couchrest dependencies [Thanks to 21studios]
- Added a basic index file [Thanks to 21studios]
- Now Admin password are undecryptable [Thanks to Sob]
- Arrayify keys for invalidation in padrino-cache
- Fixed few typos errors [Thanks to Philtr]
- Fix conflict on seeds.rb when generating admin [Thanks to Spllr]
- Correct path in spec [Thanks to Spllr]
- Bypass admin login in development
- Norwegian translation [Thanks to Fossmo]
- Updated generator for new rspec version [Thanks to Rosstimson]
- Updated generator to work with legacy rspec version
- Fixed issue with views folder not being generated in projects
- Fixed the listing headers of admin pages, now is plural [Thanks to Rosstimson]
- Fixed model migration removal [Thanks to Sob]
- Updated plugins to pull using https [Thanks to Sob]


## 0.9.18

- Updated to use latest http_router
- Fix undefined method crypted_password when using Postgresql + Sequel [Thanks to Commuter]
- Preserve params for after use by a before filter
- Fix const scope for Rack::Mime [Thanks to spllr]


## 0.9.17

- Fixed a problem with routing of “/”
- Added utf-8 feature in forms using utf8/_e/snowman tag


## 0.9.16

- Fixed problems with admin
- Now only AS > 3.0
- Added padrino-cache
- Added redis backend for padrino-cache
- Added dom helpers [Thanks to nu7hatch]
- Added regex support for route portions
- Update rspec generation to use let() [Thanks to rbxbx]
- Added mysql2 support for activerecord [Thanks to kyanagi]
- Fixed riot test helper generation
- Added concise routing support
- Added controller mapping support
- Fixed tests to support concurrency
- Fixed options_for_selec to be Array-compatible [Thanks to zmack]
- Support Sinatra before blocks correctly
- Added support for shallowing in controllers
- Remove padrino-admin dependency on padrino-gen [Thanks to selman]


## 0.9.15

- Fixed an issue with reloader
- Added erubis support [Thanks Cored]
- Fixed custom conditions
- Adds Template/Plugin generation
- Added regex support in routes
- Removed some deprecations
- Fixes options_for_select helper selected logic and added test
- Added Before/After load hooks
- Fixes DataMapper.finalize
- Fixes issue with invalid class on form fields [Thanks RichGuk]
- Enhances Datamapper database creation [Thanks Lusis]
- Adds a span around 'required' note for form fields
- Fixes padrino bin command to properly display help
- Stores component file in project after choices are validated
- Added Ohm support [Thanks to Lusis]
- Updated require_dependencies to take a version
- Fixes app destroy option
- Adds Dutch translation [Thanks to Martijin]
- Adds Polish translation [Thanks to Kriss]
- Added scss for stylesheet generation
- Added +mongomatic+ as an orm component [Thanks to lusis]
- Added +liquid+ as an renderer component [Thanks to rwilcox]


## 0.9.14

- Application generator should create public subfolder
- Refactored application mounter class
- Updated mongomapper to use bson_ext
- Use entity code instead of copyright symbol
- Ensure app generation creates own public folder
- Fixed padrino g alias
- Fixed distance_of_time_in_words helper [Thanks to Yannick Koechlin]


## 0.9.13

- Fixed a problem with padrino g the alias of padrino-gen
- Fixed a naming bug in relation to using classify to manipulate project name
- Refactored and enhanced rake routes (and rake routes:app)


## 0.9.12

- Deprecated mount_core and remove references
- Fixed problem with czech translation file
- Fixed a problem with routes with same path but different verbs and provides


## 0.9.11

- Fixed provides with IE
- DM 1.0 and AR Tasks compat
- Fixed DM 1.0 rake tasks
- Dropped support of :respond_to in favor of :provides
- Added provides in controller level App.controller :provides => [:json, :xml]
- Added compatibility with AS 3.0
- Fixed compatibility with DM 1.0
- Improves dependencies in a Gemfile and autoinjected into gemspecs
- Allow models to be generated in subapps with --app flag
- Added bundler support also for testing [Thanks to Ryanfitz]
- Updated I18n dependency to version > 0.4.0
- Padrino now uses http_router instead of usher to handle url routing
- Reorganized a bit ours "servers"
- Added support for easily adding custom dependency paths with Padrino.custom_dependencies("...")
- Padrino::Application.run! now perform Padrino.load! automatically (useful if you want to use MyApp.run!)
- PADRINO_ROOT if not defined will be automatically detected
- Improved reloader (that fixes also problems with MM)
- Core refactoring
- Fixed mounter in certain scenarios (i.e. single app file)
- Fixed an issue when using only Padrino Rendering (without Padrino Routing) in a Sinatra application
- Fixed a path must always match the url_format and optionally the given request.accept
- Updated usher version which fix a problem using :provides with dashes in the URL
- Improve the router's use of base uri's in url(). [Thanks to Lholden]
- Support params as arrays for generation. More efficent generation
- Added 405 support
- Removed jeweler dependency and use dynamic gemspecs
- Fixed / Updated German translations [Thanks to Gottlike]
- Fixed a problem with extensions since Sinatra#register extend every thing
- Fixed a problem when reloading apps
- Fixed Mongoid adapter using updated master branch
- Moved bundler dependency from padrino-core to padrino-gen
- Moved I18n dependency from padrino-core to padrino-helpers
- Use 'mail' library and remove 'tmail' dependency for padrino-mailer
- Adds support for a quick 'email' helper for delivering mail in padrino-mailer
- Replaces old mailer syntax with a more consistent dsl
- Allow default rendering options to be changed [Thanks to Skade]
- Fixed ensure to load database conf before everything
- Prevent htm, html mismatch in content_type [Thanks to Skade]
- Fixed issue with rake test tasks
- Fixed an issue with trailing delimiters for index controller actions (i.e /posts/)
- Fixed issue with sequel in admin gem
- Fixed error_messages_for to use humanized attribute
- Fixed indentation issues for orm generators
- Added Ukrainian translation [Thanks to Mama]
- Added Spanish translation [Thanks to Alvaro]
- Added Turkish translation [Thanks to Selman ULUG]
- Added Czech translation [Thanks to Josef Pospíši]
- Added support for disabling asset timestamps via setting
- Fixed issue with invalid field names
- Adds tiny skeleton generation for project and app generators
- Adds support for a '--app' option to specify app name in project generator
- Adds support for '--adapter' option which specifies what SQL adapter to use(for AR, Datamapper, Sequel)
- Fixed escaping of javascript [Thanks to Ryan Fitzgerald]
- Adds dojo.js as script component
- Adds compass component for stylesheets in project generator [Thanks to Ryan Fitzgerald]


## 0.9.10

- Fixed DM Migration Issue with Text, Boolean etc... [Thanks to Snusnu and Akzhan]
- Fixed Issue with deploying Padrino apps to a Sub-URI
- Fixed padrino g and padrino gen aliases
- Refactored padrino-gen internals
- Colorized logs
- Added support for 'rake routes' task
- Disabled sessions by defaults as Sinatra do
- Enable sessions for admin app since authentication require it
- Don't load Rack::Logger if our log_level is not :debug
- Set real values for app.public and app.static because due to frequently calls
- Updated templates with new changes
- Performance tuning: Caching layout template
- Fixed a bug with layouts that prevent double rendering
- Added Scoped filters
- Added Scoped layout
- Our routing system now with :provides or :respond_to (other than route format) match "request.accept"
- Our routes now accepts Sinatra 1.0 conditions
- Routing refactoring
- Now mounter use the our new Router instead of Rack::Builder
- Added a new router class that handle in a easy why domains
- Performance Tuning: Caching templates
- Danish translation [Thanks to Molte]
- Russian translation [Thanks to Imm]
- Added +extcore+ as a javascript option in project generator [Thanks to Imm]
- Updated jquery to v1.4.2
- Added couchdb support for padrino-admin [Thanks to Ghostm]
- Brazilian Translation [Thanks to Deminew]
- French Translation [Thanks to Mickey]
- ActiveSupport 3.0 Compatibility fixes
- Removed VERSION files. This prevent problems described here: http://github.com/nex3/haml/issues/issue/24
- Added default values for controllers
- Updated sequel generation to work with sqlite3.
- Fixes support for index routes with params.
- Fixes SASS reload plugin issue on 1.9.X.
- Fixes an issue with generator not casing controller / model names
- Fixes issue with mounter and locating the app file
- Added sequel support for padrino-admin [Thanks to Aemadrid]
- Added basic sequel migration tasks [Thanks to Aemadrid]
- Mailer now supports setting template path to render explicitly


## 0.9.9

- Minor typo fixes


## 0.9.8

- Dropped compatibility with Sinatra < 1.0
- Ruby 1.8.6 compat
- Initials additions for make Padrino compat with ruby 1.9.2
- Fixed a small issue with Passenger and Ruby 1.9.1
- Removed clear_template_cache! since Sinatra 1.0. now has settings.reload_templates
- Fixed error_messages_for with custom locales
- Added "padrino gen", "padrino g" as alias of padrino-gen.
- Prevent that an account destroy itself
- Removed some unused code from padrino-admin
- Improved Padrino Admin Generator, now admin_page accepts multiple models
- Fixed Padrino Admin Account where the accounts password field is in plain text (text_field)
- Added layouts folder back into application skeleton
- Fixed an issue with not being able to render erb or haml properly in a js response
- Added support for forcing render of specified template (i.e render 'foo.haml' in js request)


## 0.9.7

- Fixed a problem with folders called "sinatra" and PADRINO_IGNORE_CALLERS
- Fixed TestTask
- Fixed admin generator since not all ruby versions respond to "lines"
- Fixed an issue in Sinatra::ShowExceptions since Bundler changes the Gem.dir
- Removed from Sinatra::ShowExceptions and clean_backtrace padrino code
- Added layout finder with format and locale
- Improved template finder (with format and locale)
- Fixed a bug that duplicates admin menus during app reloading
- Added feed_tag helper for rss / atom auto discovery
- Removed Mailer Initializer from app.rb.tt and added it to the mailer generator
- Removed duplicate app folder in project skeleton
- Couchrest generator now include in Gemfile json_pure
- Fixed project name when using some like www.my-domain.com
- Fixed a small typo error in app template
- Fixes issue with formatted routes for an index
- Fixed an issue with Riot and RR in generator
- Cleaned up the implementation for asset include helpers for javascript and css
- Added stylesheet generator. Includes sass and less ( via rack-less)


## 0.9.6

- Fixed an issue in controller generator when using --app=app_name
- Added mm:transate task for easily translate models
- Updated favicon_tag to search inside images folder
- Fixes an issue with rendering with layout false now you can use: render 'path/to/template', :layout => false
- Small helpers refactoring
- Fixed mailer initializer issue. Cleaned up options in delivery.rb
- Fixes tests in padrino helper


## 0.9.5

- Added the possibility for dsl lovers to create a single file in app called helpers.rb/controllers.rb/mailers.rb
- Changed generated scaffold now table rows didn't contains links
- Fixed a bug in reloader, now we prevent schema.rb reloading
- Fixed check_box helper when :checked => false we remove them
- Added auto template lookup with locale and format i.e: show.ru.js.erb or show.js.erb or show.en.erb
- Css refactoring and fixed an unused css in Padrino Admin generator
- Fixed ar:structure:dump and others tasks that don't use symbols
- Fixed compatibility with ERB and Sinatra 1.0
- Fixed an issues with index and ar:auto:upgrade
- Now we use Sinatra 0.9.6 since previous versions on ruby >= 1.8.7-p248 raise a segfault bug
- Refactored executables
- Added strip_tags helper
- Fixed model_attribute_translate helper
- Added favicon
- Prevent bundler gem clashing
- Fixed minor SASS support issue for haml generated projects


## 0.9.4

- Improved select_tag helper, now accept :include_blank => 'My text'
- Re-require 'tilt' since not all of us use sinatra --pre
- Fixed a strange api change of bundler (see: http://github.com/carlhuda/bundler/issues/closed#issue/160)
- Removed Bundler 0.9.7 dependency and allow all versions > 0.9.7.
- Fixed Padrino Mailer views_path when we use a "multi app" project
- Fixed content_type in Padrino Mailer
- Added a spec option -fs
- Removed rspec.opts and use it directly in rake task


## 0.9.3

- Fixed a problem with some env with generators


## 0.9.2

- Fixed overwrite of :+name+ in f.check_box and f.radio_button
- Added +highlight+ helper
- Cleaned up (truncated) README files for Padrino gems
- Added template agnosticism (erb/haml) in admin generator
- Added +mootools+ as a javascript option in project generator
- Added +cucumber+ as a test option in project generator
- Added +Mongoid+ as adapter in admin generator
- Added +Mongoid+ as an orm option in project generator
- Added +MongoMapper+ as adapter in admin generator
- Fixed an issue with the SASS initializer for project generator
- Fixed a small problem with DataMapper and our error helpers
- Removed admin flash middleware (extracted to extension)
- Minor code cleanup


## 0.9.1

- New Padrino Admin with static theme based on web-app-theme
- Fix routing module to work for sinatra standalone
- Fix rendering module to work for sinatra standalone
- Added +favicon_tag+ helper
- Refactored Internals of +Padrino+::+Application+
- Added I18n helpers +t+ and +l+
- Added a new helper +error_message_on+
- Added a new helper +button_to+

