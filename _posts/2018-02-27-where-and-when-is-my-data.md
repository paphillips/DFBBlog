---
layout: default
title: "Where and when is my data"
date: 2018-02-27
categories: [DFB_Mini_IDE, Intro]
---

This site is intended to decrease the learning curve of the Digital Filter Block (DFB), a limited-scope DSP engine that is built into the Cypress PSoC line.

The DFB is a powerful yet somewhat behind-the-scenes component in the PSoC line. 

One component, the 'Filter', provides a friendly user interface on top of the DFB to configure a two channel streaming digital filter. 

If this tool does not meet your needs I see three design options:

* Do your processing with the CPU
* Use an external DSP chip
* Learn DFB assembler

My design had more advanced requirements than the filter component could provide:

* 8 channel ADC threshold and peak monitoring in real-time
* 4-channel x 24-sample linear regression slope calculation in the background

These are too heavy to do on the CPU with other tasks so I set out to learn DFB assembler.

During this learning cycle I found that while the datasheet covers each technical area in detail it lacks a macro view and is somewhat opaque in the pipelining aspects. As with most datasheets, it takes a long time for all of the information to 'click'.

The learning curve is steep on DFB assembler due to several factors:

* The assembler simulator provides limited output information of each subsystem within the DFB
* The pipeline delays are not directly documented. The datasheet indicates:
   > _The instruction pipelining follows Figure 3 for the DFB processor. The diagram shows the locations of the pipeline registers so you can determine the instruction pipeline latency._
   * Perhaps the pipelining is obvious to a professional DSP engineer, but I did not find it to be clear especially when I have to keep referring to the diagram while programming.

In order to achieve my design objectives I decided to take a few weeks and build a mini-development environment for the DFB. It provides the following benefits:

1. Visual diagram of the pipeline delays - you can see when an instruction is queued, when data is loaded, when the calculations take place, and when the output is put on the datapath
2. View of the data values as they move through the datapath
3. Visual indication of active datapath as configured by the muxes
4. Ability 'scrub' backward and forward through the code cycles
5. Full detail of ACU / Data ram and address registers at each cycle
6. Jump diagram to allow one to easily check that the ACU is positioned on the proper offset at each entry to a label
7. Ability to 'schedule' globals ahead of time at specific cycles, instead of hand entering them
8. A value converter to switch values between hex, integer, and DFB q.23 values one at a time or in bulk

The bottom line with this tool is that is that you may see _where_ and _when_ your data is inside the DFB.

This is available free on [github](https://github.com/paphillips/DFB). The windows installer is [here](https://github.com/paphillips/DFB/raw/master/DFBUtilityInstaller/Debug/DFBUtilityInstaller.msi).