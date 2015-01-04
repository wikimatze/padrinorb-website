require 'rake'
require 'colorator'


# Credit for this goes to https://gist.github.com/alexyoung/143571
desc 'Create tags page'
task :t do
  puts 'Generating tags...'.green
  require 'rubygems'
  require 'jekyll'
  include Jekyll::Filters

  options = Jekyll.configuration({})
  site = Jekyll::Site.new(options)
  site.read_posts('')

  html =<<-HTML
---
title: Tags
layout: page
---

{% include header_navigation.html %}

<div class="container vertical-offset-top">
  <div class="row">
    <div class="col-lg-12 text-center">
      <h1>{{ page.title }}</h1>
    </div>
  </div>

  <div class="row">
    <div class="col-lg-8">

  HTML

  site.categories.sort.each do |category, posts|
  html << <<-HTML

      <h4 id="#{category}">#{category}</h4>
  HTML

    html << '    <ul class="posts">'
    posts.each do |post|
      post_data = post.to_liquid
      html << <<-HTML

      <li>
        <div>#{date_to_string post.date}</div>
        <a href="#{post.url}">#{post_data['title']}</a>
      </li>
      HTML
    end
  html << '    </ul>'
  end

  File.open('tags.html', 'w+') do |file|
    file.puts html
    3.times do
      file.puts "</div>"
    end
  end

  puts 'Done.'
end

desc 'Deploy'
task :d => :t do
  puts 'Building jekyll ..'.green
  system 'jekyll build'

  puts 'Deploying site with lovely rsync ..'.green
  system "rsync -vru -e \"ssh\" --del ?site/* xa6195@xa6.serverdomain.org:/home/www/padrinorb/"

  puts 'Done!'.green
end
