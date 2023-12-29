<?php
/**
 *
 * @return string
 */

$blockClasses = 'toggleItem ';
$blockClasses .= '';
$blockStyles = '';

$block_wrapper_attributes = get_block_wrapper_attributes(
    [
    'class' => $blockClasses,
    'style' => $blockStyles
    ]
); ?>

<div <?php echo $block_wrapper_attributes; // phpcs:ignore ?>>
    <div class="toggleItem__header">
        <h3 class="toggleItem__title"><?php echo $attributes['titleItem'] ? $attributes['titleItem'] : 'Title Item'; ?></h3>

        <svg class="plusIcon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </div>

    <div class="toggleItem__content">
        <?php if ($attributes['contentItem']) { ?>
            <p class="toggleItem__content">
            <?php echo $attributes['contentItem']; ?>
            </p>
            <?php
        } ?>
        <?php echo $content; ?>
    </div>
</div>
