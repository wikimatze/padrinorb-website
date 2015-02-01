---
date: 2010-03-01
update: 2014-12-14
author: Nathan
update_author: Matthias
email: nesquena@gmail.com
title: Guides
text: To get started with Padrino, go through these guides.
---


Padrino is a Ruby framework built upon the excellent [Sinatra](http://www.sinatrarb.com/) web library. Sinatra is a DSL for creating simple web applications in Ruby with minimal effort. This framework makes it as fun and easy as possible to code increasingly advanced web applications by enhancing Sinatra while staying true to the spirit that makes it great.
 

## Features

Here is a list of major functionality Padrino provides on top of Sinatra:


<table class="table table-striped">
  <tbody><tr>
      <td style="text-align:right;"><strong>Agnostic:</strong></td>
      <td>Full support for many popular testing, templating, mocking, and database libraries.</td>
    </tr>
    <tr>
      <td style="text-align:right;"><strong>Generators:</strong></td>
      <td>Create Padrino applications, models, controllers i.e: <tt>padrino g project</tt>.</td>
    </tr>
    <tr>
      <td style="text-align:right;"><strong>Mountable:</strong></td>
      <td>Unlike other ruby frameworks, principally designed for mounting multiple apps.</td>
    </tr>
    <tr>
      <td style="text-align:right;"><strong>Routing:</strong> </td>
      <td>Full url named routes, named params, respond_to support, before/after filter support.</td>
    </tr>
    <tr>
      <td style="text-align:right;"><strong>Tag Helpers:</strong></td>
      <td>View helpers such as: <tt>tag</tt>, <tt>content_tag</tt>, <tt>input_tag</tt>.</td>
    </tr>
    <tr>
      <td style="text-align:right;"><strong>Asset Helpers:</strong> </td>
      <td>View helpers such as: <tt>link_to</tt>, <tt>image_tag</tt>, <tt>javascript_include_tag</tt>.</td>
    </tr>
    <tr>
      <td style="text-align:right;"><strong>Form Helpers:</strong></td>
      <td>Builder support such as: <tt>form_tag</tt>, <tt>form_for</tt>, <tt>field_set_tag</tt>, <tt>text_field</tt>.</td>
    </tr>
    <tr>
      <td style="text-align:right;"><strong>Text Helpers:</strong></td>
      <td>Useful formatting like: <tt>relative_time_ago</tt>, <tt>js_escape_html</tt>, <tt>sanitize_html</tt>.</td>
    </tr>
    <tr>
      <td style="text-align:right;"><strong>Mailer:</strong></td>
      <td>Fast and simple delivery support for sending emails (akin to ActionMailer).</td>
    </tr>
    <tr>
      <td style="text-align:right;"><strong>Admin:</strong></td>
      <td>Builtin Admin interface (like Django).</td>
    </tr>
    <tr>
      <td style="text-align:right;"><strong>Caching:</strong></td>
      <td>Simple route and fragment caching to easily speed up your web requests.</td>
    </tr>
    <tr>
      <td style="text-align:right;"><strong>Logging:</strong></td>
      <td>Provide a unified logger that can interact with your <span class="caps">ORM</span> or any library.</td>
    </tr>
    <tr>
      <td style="text-align:right;"><strong>Reloading:</strong></td>
      <td>Automatically reloads server code during development.</td>
    </tr>
    <tr>
      <td style="text-align:right;"><strong>Localization:</strong></td>
      <td>Full support of I18n</td>
      <td></td>
    </tr>
</tbody></table>
<br>


## Guides

When getting started with Sinatra or Padrino for the first time, we recommend that you check out the [Getting Started](/guides/getting-started) guide which provides an overview of the rest of our resources. Also be sure to check out the [Blog Tutorial](/guides/blog-tutorial) for a step-by-step walkthrough of building your first Padrino project.

Padrino consists of multiple modules which enhance Sinatra in different ways. The major components are described in detail below:

- [Getting Started](/guides/getting-started)
- [Generators](/guides/generators)
- [Application Helpers](/guides/application-helpers)
- [Controllers and Routing](/guides/controllers)
- [Development and Terminal Commands](/guides/development-commands)
- [Mounting Sub-applications](/guides/mounting-applications)
- [Delivering Mail](/guides/padrino-mailer)
- [Admin and Authentication](/guides/padrino-admin)
- [Site Caching](/guides/caching-support)


Note that as a user of Padrino, each of the major components can be used [standalone](/guides/standalone-usage-in-sinatra) in an existing Sinatra application or used together for a full-stack Padrino project.


These guides should provide a pretty good overview but if you have any questions be sure to contact us: [@padrinorb](http://twitter.com/#!/padrinorb), discuss things on the [google groups](https://groups.google.com/forum/?hl=en#!forum/padrino), join us on freenode IRC at “\#padrinorb” or [open an issue](https://github.com/padrino/padrino-framework/issues) on GitHub.

